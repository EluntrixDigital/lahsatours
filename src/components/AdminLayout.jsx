import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import AdminSidebar from './AdminSidebar'

const { Content } = Layout

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileDrawerVisible, setMobileDrawerVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setMobileDrawerVisible(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleCollapse = (value) => {
    setCollapsed(value)
    if (isMobile) {
      setMobileDrawerVisible(false)
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Desktop Sidebar */}
      <div style={{ 
        display: isMobile ? 'none' : 'block'
      }}>
        <AdminSidebar collapsed={collapsed} setCollapsed={handleCollapse} />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Admin Portal"
        placement="left"
        onClose={() => setMobileDrawerVisible(false)}
        open={mobileDrawerVisible}
        bodyStyle={{ padding: 0 }}
        width={250}
      >
        <AdminSidebar 
          collapsed={false} 
          setCollapsed={() => setMobileDrawerVisible(false)}
          isMobile={true}
        />
      </Drawer>

      <Layout style={{ 
        marginLeft: isMobile ? 0 : (collapsed ? 80 : 280), 
        transition: 'all 0.2s' 
      }}>
        {/* Mobile Menu Button */}
        {isMobile && (
          <div style={{ 
            padding: '12px 16px', 
            background: '#fff',
            borderBottom: '1px solid #f0f0f0',
            position: 'sticky',
            top: 0,
            zIndex: 10
          }}>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setMobileDrawerVisible(true)}
              style={{ fontSize: 18 }}
            />
          </div>
        )}

        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
