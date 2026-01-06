import { Form, Input, Button, Card, Switch, Select } from 'antd'
import { SaveOutlined } from '@ant-design/icons'

const { Option } = Select

interface SettingsFormValues {
  siteName: string
  siteDescription: string
  theme: string
  enableRegistration: boolean
  enableComments: boolean
}

const Settings: React.FC = () => {
  const [form] = Form.useForm<SettingsFormValues>()

  const onFinish = (values: SettingsFormValues) => {
    console.log('Success:', values)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">系统设置</h1>
      <Card title="基本设置">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="siteName"
            label="网站名称"
            rules={[{ required: true, message: '请输入网站名称' }]}
          >
            <Input placeholder="请输入网站名称" />
          </Form.Item>

          <Form.Item
            name="siteDescription"
            label="网站描述"
            rules={[{ required: true, message: '请输入网站描述' }]}
          >
            <Input.TextArea placeholder="请输入网站描述" rows={4} />
          </Form.Item>

          <Form.Item
            name="theme"
            label="主题设置"
            rules={[{ required: true, message: '请选择主题' }]}
          >
            <Select placeholder="请选择主题">
              <Option value="light">浅色主题</Option>
              <Option value="dark">深色主题</Option>
              <Option value="auto">自动主题</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="enableRegistration"
            label="启用注册"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="enableComments"
            label="启用评论"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item className="flex justify-end">
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
              保存设置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Settings
