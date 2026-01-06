import { Card, Row, Col, Statistic, Progress } from 'antd'
import {
  UserOutlined,
  DollarOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
} from '@ant-design/icons'
import ReactECharts from 'echarts-for-react'

const Dashboard: React.FC = () => {
  // Mock数据 - 最近30天的用户增长数据
  const mockUserGrowthData = {
    dates: Array.from({ length: 30 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - (29 - i))
      return `${date.getMonth() + 1}/${date.getDate()}`
    }),
    newUsers: Array.from(
      { length: 30 },
      () => Math.floor(Math.random() * 100) + 20
    ),
    activeUsers: Array.from(
      { length: 30 },
      () => Math.floor(Math.random() * 500) + 200
    ),
  }

  // ECharts配置
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    legend: {
      data: ['新增用户', '活跃用户'],
      top: 'top',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '15%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: mockUserGrowthData.dates,
        axisPointer: {
          type: 'shadow',
        },
        axisLabel: {
          rotate: 45,
          fontSize: 10,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '新增用户',
        min: 0,
        max: 150,
        interval: 30,
        axisLabel: {
          formatter: '{value}人',
        },
      },
      {
        type: 'value',
        name: '活跃用户',
        min: 0,
        max: 800,
        interval: 200,
        axisLabel: {
          formatter: '{value}人',
        },
      },
    ],
    series: [
      {
        name: '新增用户',
        type: 'bar',
        data: mockUserGrowthData.newUsers,
        itemStyle: {
          color: '#1890ff',
        },
      },
      {
        name: '活跃用户',
        type: 'line',
        yAxisIndex: 1,
        data: mockUserGrowthData.activeUsers,
        itemStyle: {
          color: '#52c41a',
        },
        smooth: true,
      },
    ],
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">仪表盘</h1>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic
              title="总用户数"
              value={12345}
              prefix={<UserOutlined />}
              styles={{ content: { color: '#3f8600' } }}
              suffix="人"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="今日销售额"
              value={123456}
              prefix={<DollarOutlined />}
              styles={{ content: { color: '#1890ff' } }}
              suffix="元"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="今日订单"
              value={345}
              prefix={<ShoppingCartOutlined />}
              styles={{ content: { color: '#722ed1' } }}
              suffix="笔"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="完成率"
              value={88.88}
              prefix={<BarChartOutlined />}
              styles={{ content: { color: '#fa8c16' } }}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="mt-6">
        <Col span={12}>
          <Card title="销售进度">
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span>第一季度</span>
                <span>80%</span>
              </div>
              <Progress percent={80} status="active" />
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span>第二季度</span>
                <span>70%</span>
              </div>
              <Progress percent={70} status="active" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>第三季度</span>
                <span>90%</span>
              </div>
              <Progress percent={90} status="active" />
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="用户增长趋势">
            <ReactECharts
              option={option}
              style={{ height: '400px', width: '100%' }}
              className="user-growth-chart"
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
