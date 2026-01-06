import { useState } from 'react'
import { Layout as AntLayout } from 'antd'
import Header from './Header'
import Sidebar from './Sidebar'

const { Content } = AntLayout

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} />
      <AntLayout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className="p-6">{children}</Content>
      </AntLayout>
    </AntLayout>
  )
}

export default Layout
