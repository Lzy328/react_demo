import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

// 懒加载页面组件
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Users = lazy(() => import('../pages/Users'))
const Settings = lazy(() => import('../pages/Settings'))

// 定义路由配置
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]

export default routes
