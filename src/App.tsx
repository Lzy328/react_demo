import { HashRouter, useRoutes } from 'react-router-dom'
import { Suspense } from 'react'
import Layout from './components/Layout'
import routes from './routes'

// 路由渲染组件
const RouteRenderer = () => {
  const renderedRoutes = useRoutes(routes)
  return renderedRoutes
}

function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <RouteRenderer />
        </Suspense>
      </Layout>
    </HashRouter>
  )
}

export default App