import { Layout, Menu } from 'antd'
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'

const { Sider } = Layout

interface SidebarProps {
  collapsed: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const location = useLocation()

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">仪表盘</Link>,
    },
    {
      key: '/users',
      icon: <UserOutlined />,
      label: <Link to="/users">用户管理</Link>,
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: <Link to="/settings">系统设置</Link>,
    },
  ]

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      className="bg-white border-r"
      trigger={null}
    >
      <div className="text-center py-4">
        <h2 className={`font-bold ${collapsed ? 'text-xs' : 'text-lg'}`}>
          {collapsed ? '管理' : '后台管理'}
        </h2>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        className="border-0"
      />
    </Sider>
  )
}

export default Sidebar