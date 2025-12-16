import React, { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase/config'
import { Layout, Card, Form, Input, Button, Upload, Image, Space, message } from 'antd'
import { UploadOutlined, SaveOutlined, ScanOutlined, CreditCardOutlined } from '@ant-design/icons'

const { Content } = Layout

const AdminPayment = () => {
  const [form] = Form.useForm()
  const [qrFile, setQrFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    fetchPaymentSettings()
  }, [])

  const fetchPaymentSettings = async () => {
    try {
      const docRef = doc(db, 'settings', 'payment')
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        form.setFieldsValue(docSnap.data())
      }
    } catch (error) {
      console.error('Error fetching payment settings:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (info) => {
    const file = info.file.originFileObj
    if (file) {
      if (file.type.startsWith('image/')) {
        setQrFile(file)
      } else {
        message.error('Please select an image file')
      }
    }
  }

  const handleUploadQR = async () => {
    if (!qrFile) {
      message.warning('Please select a file to upload')
      return
    }

    setUploading(true)
    try {
      const storageRef = ref(storage, `payment/qr-code-${Date.now()}`)
      await uploadBytes(storageRef, qrFile)
      const downloadURL = await getDownloadURL(storageRef)
      form.setFieldsValue({ qrCodeUrl: downloadURL })
      setQrFile(null)
      message.success('QR code uploaded successfully!')
    } catch (error) {
      console.error('Error uploading QR code:', error)
      message.error('Error uploading QR code: ' + error.message)
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (values) => {
    setSaving(true)
    try {
      await setDoc(doc(db, 'settings', 'payment'), {
        ...values,
        updatedAt: new Date().toISOString()
      })
      message.success('Payment settings saved successfully!')
    } catch (error) {
      console.error('Error saving payment settings:', error)
      message.error('Error saving payment settings: ' + error.message)
    } finally {
      setSaving(false)
    }
  }

  const qrCodeUrl = Form.useWatch('qrCodeUrl', form)

  return (
    <Content style={{ padding: isMobile ? '16px' : '24px', background: '#f0f2f5', minHeight: '100vh' }}>
      <Card
        title="Payment Settings"
        loading={loading}
        style={{ maxWidth: isMobile ? '100%' : 800 }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="upiId"
            label={
              <Space>
                <CreditCardOutlined />
                <span>UPI ID</span>
              </Space>
            }
          >
            <Input placeholder="yourname@upi" />
            <div style={{ marginTop: 8, color: '#8c8c8c', fontSize: 12 }}>
              Enter your UPI ID (e.g., yourname@paytm, yourname@phonepe)
            </div>
          </Form.Item>

          <Form.Item
            label={
              <Space>
                <ScanOutlined />
                <span>QR Code Image</span>
              </Space>
            }
          >
            {qrCodeUrl && (
              <div style={{ marginBottom: 16 }}>
                <p style={{ marginBottom: 8 }}>Current QR Code:</p>
                <Image
                  src={qrCodeUrl}
                  alt="QR Code"
                  width={200}
                  height={200}
                  style={{ border: '1px solid #d9d9d9', borderRadius: 4 }}
                />
              </div>
            )}

            <Space direction="vertical" style={{ width: '100%' }}>
              <Upload
                beforeUpload={() => false}
                onChange={handleFileChange}
                showUploadList={false}
                accept="image/*"
              >
                <Button icon={<UploadOutlined />}>
                  {qrFile ? qrFile.name : 'Select QR Code Image'}
                </Button>
              </Upload>
              {qrFile && (
                <Button
                  type="primary"
                  loading={uploading}
                  onClick={handleUploadQR}
                  icon={<UploadOutlined />}
                >
                  Upload QR Code
                </Button>
              )}
            </Space>
            <div style={{ marginTop: 8, color: '#8c8c8c', fontSize: 12 }}>
              PNG, JPG, or JPEG (max 5MB)
            </div>
          </Form.Item>

          <Form.Item name="qrCodeUrl" hidden>
            <Input />
          </Form.Item>

          <Card
            title="Payment Button Preview"
            style={{ marginTop: 24, marginBottom: 24 }}
          >
            <div style={{ textAlign: 'center', padding: '20px' }}>
              {qrCodeUrl ? (
                <div>
                  <Image
                    src={qrCodeUrl}
                    alt="QR Code"
                    width={150}
                    height={150}
                    style={{ marginBottom: 16 }}
                  />
                  <p style={{ color: '#8c8c8c', marginBottom: 16 }}>Scan to pay</p>
                </div>
              ) : (
                <div style={{ 
                  width: 150, 
                  height: 150, 
                  margin: '0 auto 16px',
                  background: '#f0f0f0',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ScanOutlined style={{ fontSize: 48, color: '#bfbfbf' }} />
                </div>
              )}
              {form.getFieldValue('upiId') && (
                <div style={{ marginBottom: 16 }}>
                  <p style={{ margin: 0, fontWeight: 500 }}>UPI ID:</p>
                  <p style={{ margin: 0, color: '#1890ff', fontSize: 16 }}>
                    {form.getFieldValue('upiId')}
                  </p>
                </div>
              )}
              <Button type="primary" size="large" style={{ marginTop: 16 }}>
                Pay Now
              </Button>
            </div>
          </Card>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
              loading={saving}
              size="large"
            >
              Save Settings
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  )
}

export default AdminPayment
