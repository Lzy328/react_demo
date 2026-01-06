import { Button, Avatar, Dropdown, MenuProps } from 'antd'
import {
  MenuOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from '@ant-design/icons'

interface HeaderProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
  // ✅ 正确使用 items 属性
  const menuItems: MenuProps['items'] = [
    {
      key: '1',
      label: '设置',
      icon: <SettingOutlined />,
    },
    {
      key: '2',
      label: '退出登录',
      icon: <LogoutOutlined />,
    },
  ]

  return (
    <div className="flex items-center justify-between px-4 h-16">
      <div className="flex items-center">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="mr-2"
        />
        <h1 className="text-xl font-bold">React Admin Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        {/* 用户头像下拉菜单 */}
        <Dropdown menu={{ items: menuItems }} trigger={['click']}>
          <Avatar icon={<UserOutlined />} className="cursor-pointer" />
        </Dropdown>
      </div>
    </div>
  )
}

export default Header