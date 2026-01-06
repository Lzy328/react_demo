import { Card, Row, Col, Statistic, Progress, Table, Tag, Space } from 'antd'
import {
  UserOutlined,
  DollarOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  EyeOutlined,
  TrophyOutlined,
  PieChartOutlined,
  RiseOutlined,
  ClockCircleOutlined,
  StarOutlined,
} from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react'

const Dashboard: React.FC = () => {
  // 动态数据状态
  const [dynamicData, setDynamicData] = useState({
    totalUsers: 12345,
    todaySales: 123456,
    todayOrders: 345,
    completionRate: 88.88,
    pageViews: 56789,
    conversionRate: 3.45,
    avgOrderValue: 357,
    repurchaseRate: 28.5,
  })

  // 模拟数据更新
  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicData(prev => ({
        ...prev,
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 10),
        todaySales: prev.todaySales + Math.floor(Math.random() * 1000),
        todayOrders: prev.todayOrders + Math.floor(Math.random() * 5),
        pageViews: prev.pageViews + Math.floor(Math.random() * 100),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

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

  // Mock数据 - 用户地域分布
  const userDistributionData = [
    { name: '华东地区', value: 35000 },
    { name: '华南地区', value: 28000 },
    { name: '华北地区', value: 22000 },
    { name: '华中地区', value: 18000 },
    { name: '西部地区', value: 15000 },
  ]

  // Mock数据 - 产品性能雷达图
  const productPerformanceData = {
    indicator: [
      { name: '易用性', max: 100 },
      { name: '功能性', max: 100 },
      { name: '稳定性', max: 100 },
      { name: '性价比', max: 100 },
      { name: '用户体验', max: 100 },
      { name: '售后服务', max: 100 },
    ],
    data: [
      {
        value: [85, 90, 88, 82, 92, 87],
        name: '产品A',
      },
      {
        value: [78, 85, 90, 88, 85, 92],
        name: '产品B',
      },
    ],
  }

  // Mock数据 - 热门产品
  const hotProducts = [
    { key: '1', name: '产品A', sales: 12345, orders: 456, rating: 4.8 },
    { key: '2', name: '产品B', sales: 9876, orders: 345, rating: 4.6 },
    { key: '3', name: '产品C', sales: 8765, orders: 298, rating: 4.9 },
    { key: '4', name: '产品D', sales: 7654, orders: 267, rating: 4.5 },
    { key: '5', name: '产品E', sales: 6543, orders: 234, rating: 4.7 },
  ]

  // Mock数据 - 实时监控
  const realTimeData = [
    { name: '服务器CPU', value: 65 },
    { name: '内存使用', value: 78 },
    { name: '磁盘空间', value: 45 },
    { name: '网络流量', value: 82 },
  ]

  // ECharts配置 - 用户增长趋势
  const userGrowthOption = {
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
          borderRadius: [4, 4, 0, 0],
        },
        animationDelay: (idx: number) => idx * 10,
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
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(82, 196, 26, 0.3)' },
              { offset: 1, color: 'rgba(82, 196, 26, 0.05)' },
            ],
          },
        },
        animationDelay: (idx: number) => idx * 10 + 100,
      },
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: (idx: number) => idx * 5,
  }

  // ECharts配置 - 用户地域分布
  const userDistributionOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      data: userDistributionData.map(item => item.name),
    },
    series: [
      {
        name: '用户地域分布',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: userDistributionData,
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: (idx: number) => idx * 50,
      },
    ],
  }

  // ECharts配置 - 产品性能雷达图
  const productPerformanceOption = {
    tooltip: {},
    legend: {
      data: ['产品A', '产品B'],
      top: 'top',
    },
    radar: {
      indicator: productPerformanceData.indicator,
      shape: 'circle',
      splitNumber: 5,
      axisName: {
        color: '#666',
      },
      splitLine: {
        lineStyle: {
          color: ['#e6f7ff', '#bae7ff', '#91d5ff', '#69c0ff', '#40a9ff'],
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(230, 247, 255, 0.3)', 'rgba(186, 231, 255, 0.3)', 'rgba(145, 213, 255, 0.3)', 'rgba(105, 192, 255, 0.3)', 'rgba(64, 169, 255, 0.3)'],
        },
      },
    },
    series: [
      {
        name: '产品性能',
        type: 'radar',
        data: [
          {
            value: productPerformanceData.data[0].value,
            name: productPerformanceData.data[0].name,
            areaStyle: {
              color: 'rgba(24, 144, 255, 0.3)',
            },
            lineStyle: {
              color: '#1890ff',
            },
            itemStyle: {
              color: '#1890ff',
            },
          },
          {
            value: productPerformanceData.data[1].value,
            name: productPerformanceData.data[1].name,
            areaStyle: {
              color: 'rgba(82, 196, 26, 0.3)',
            },
            lineStyle: {
              color: '#52c41a',
            },
            itemStyle: {
              color: '#52c41a',
            },
          },
        ],
        animationEasing: 'elasticOut',
      },
    ],
  }

  // 表格列配置
  const productColumns = [
    {
      title: '排名',
      dataIndex: 'key',
      key: 'key',
      render: (text: string) => <span className="font-bold text-blue-600">{text}</span>,
      width: 80,
    },
    {
      title: '产品名称',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => (
        <Space>
          <StarOutlined className="text-yellow-500" />
          <span>{text}</span>
        </Space>
      ),
    },
    {
      title: '销售额',
      dataIndex: 'sales',
      key: 'sales',
      render: (text: number) => (
        <span className="text-green-600 font-semibold">¥{text.toLocaleString()}</span>
      ),
    },
    {
      title: '订单数',
      dataIndex: 'orders',
      key: 'orders',
      render: (text: number) => <span className="text-purple-600">{text}</span>,
    },
    {
      title: '评分',
      dataIndex: 'rating',
      key: 'rating',
      render: (text: number) => (
        <Tag color={text >= 4.8 ? 'green' : text >= 4.6 ? 'blue' : 'orange'}>
          {text}
        </Tag>
      ),
    },
  ]

  return (
    <div className="dashboard-container">
      <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        数据仪表盘
      </h1>

      {/* 核心指标卡片 - 第一行 */}
      <Row gutter={[16, 16]} className="mb-6" align="stretch">
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card h-full" hoverable>
            <Statistic
              title="总用户数"
              value={dynamicData.totalUsers}
              prefix={<UserOutlined className="text-green-500" />}
              valueStyle={{ color: '#3f8600' }}
              suffix="人"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card" hoverable>
            <Statistic
              title="今日销售额"
              value={dynamicData.todaySales}
              prefix={<DollarOutlined className="text-blue-500" />}
              valueStyle={{ color: '#1890ff' }}
              suffix="元"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card" hoverable>
            <Statistic
              title="今日订单"
              value={dynamicData.todayOrders}
              prefix={<ShoppingCartOutlined className="text-purple-500" />}
              valueStyle={{ color: '#722ed1' }}
              suffix="笔"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card" hoverable>
            <Statistic
              title="完成率"
              value={dynamicData.completionRate}
              prefix={<BarChartOutlined className="text-orange-500" />}
              valueStyle={{ color: '#fa8c16' }}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      {/* 核心指标卡片 - 第二行 */}
      <Row gutter={[16, 16]} className="mb-6" align="stretch">
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card h-full" hoverable>
            <Statistic
              title="页面访问量"
              value={dynamicData.pageViews}
              prefix={<EyeOutlined className="text-red-500" />}
              valueStyle={{ color: '#f5222d' }}
              suffix="次"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card h-full" hoverable>
            <Statistic
              title="转化率"
              value={dynamicData.conversionRate}
              prefix={<RiseOutlined className="text-cyan-500" />}
              valueStyle={{ color: '#13c2c2' }}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card h-full" hoverable>
            <Statistic
              title="平均客单价"
              value={dynamicData.avgOrderValue}
              prefix={<TrophyOutlined className="text-yellow-500" />}
              valueStyle={{ color: '#faad14' }}
              suffix="元"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stat-card h-full" hoverable>
            <Statistic
              title="复购率"
              value={dynamicData.repurchaseRate}
              prefix={<PieChartOutlined className="text-indigo-500" />}
              valueStyle={{ color: '#531dab' }}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      {/* 主要图表区域 */}
      <Row gutter={[16, 16]} className="mb-6" align="stretch">
        <Col xs={24} md={12}>
          <Card title="用户增长趋势" className="chart-card h-full">
            <ReactECharts
              option={userGrowthOption}
              style={{ height: '400px', width: '100%' }}
              className="user-growth-chart"
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="用户地域分布" className="chart-card h-full">
            <ReactECharts
              option={userDistributionOption}
              style={{ height: '400px', width: '100%' }}
              className="user-distribution-chart"
            />
          </Card>
        </Col>
      </Row>

      {/* 产品性能与热门产品 */}
      <Row gutter={[16, 16]} className="mb-6" align="stretch">
        <Col xs={24} md={12}>
          <Card title="产品性能分析" className="chart-card h-full">
            <ReactECharts
              option={productPerformanceOption}
              style={{ height: '400px', width: '100%' }}
              className="product-performance-chart"
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="热门产品排行榜" className="table-card h-full">
            <Table
              columns={productColumns}
              dataSource={hotProducts}
              pagination={false}
              rowKey="key"
              rowClassName="product-row"
            />
          </Card>
        </Col>
      </Row>

      {/* 销售进度与实时监控 */}
      <Row gutter={[16, 16]} align="stretch">
        <Col xs={24} md={12}>
          <Card title="销售目标进度" className="progress-card h-full">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">第一季度</span>
                <Tag color="blue">进行中</Tag>
              </div>
              <Progress
                percent={85}
                status="active"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                strokeWidth={12}
              />
              <div className="mt-2 text-right text-sm text-gray-500">目标：¥5,000,000</div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">第二季度</span>
                <Tag color="green">已完成</Tag>
              </div>
              <Progress
                percent={100}
                status="success"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                strokeWidth={12}
              />
              <div className="mt-2 text-right text-sm text-gray-500">目标：¥5,000,000</div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">第三季度</span>
                <Tag color="orange">即将开始</Tag>
              </div>
              <Progress
                percent={0}
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                strokeWidth={12}
              />
              <div className="mt-2 text-right text-sm text-gray-500">目标：¥6,000,000</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="系统实时监控" className="monitor-card h-full">
            <div className="grid grid-cols-1 gap-4">
              {realTimeData.map((item, index) => (
                <div key={index} className="monitor-item">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{item.name}</span>
                    <span className={`text-sm font-semibold ${item.value > 80 ? 'text-red-500' : item.value > 60 ? 'text-orange-500' : 'text-green-500'}`}>
                      {item.value}%
                    </span>
                  </div>
                  <Progress
                    percent={item.value}
                    strokeColor={item.value > 80 ? '#ff4d4f' : item.value > 60 ? '#fa8c16' : '#52c41a'}
                    strokeWidth={8}
                    showInfo={false}
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <ClockCircleOutlined className="text-blue-500 animate-pulse" />
              <span className="ml-2 text-gray-600">实时数据更新中...</span>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard