import { Table, Button, Input, Space, Modal, Form, Select, Radio } from 'antd'
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import type { FormInstance } from 'antd'
import { useEffect, useRef, useState } from 'react'

interface User {
  key?: string | number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

const Users: React.FC = () => {
  const handleAdd = () => {
    setFormTitle('新增用户')
    setFormInfo({
      name: '',
      email: '',
      role: '',
      status: 'active',
    })
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }
  const handleOk = () => {
    formRef.current?.validateFields().then(values => {
      setConfirmLoading(true)
      if (formInfo.key) {
        setUsers(prev =>
          prev.map(u =>
            u.key === formInfo.key
              ? { ...u, ...values } // 用表单值覆盖原字段
              : u
          )
        )
        setTimeout(() => {
          setOpen(false)
          setConfirmLoading(false)
        }, 500)
      } else {
        setTimeout(() => {
          setOpen(false)
          setConfirmLoading(false)
          setUsers([
            ...users,
            {
              key: users.length + 1,
              name: values.name,
              email: values.email,
              role: values.role,
              status: values.status,
            },
          ])
        }, 1500)
      }
    })
  }
  const [formInfo, setFormInfo] = useState<User>({
    name: '',
    email: '',
    role: '',
    status: 'active',
  })
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([
    {
      key: '1',
      name: '张三',
      email: 'zhangsan@example.com',
      role: '管理员',
      status: 'active',
    },
    {
      key: '2',
      name: '李四',
      email: 'lisi@example.com',
      role: '用户',
      status: 'active',
    },
    {
      key: '3',
      name: '王五',
      email: 'wangwu@example.com',
      role: '用户',
      status: 'inactive',
    },
  ])

  const handleEdit = (record: User) => {
    setFormInfo(record)
    setFormTitle('编辑用户')
    setOpen(true)
  }

  const handleDelete = (record: User) => {
    setUsers(prev => prev.filter(u => u.key !== record.key))
  }

  const columns = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        >
          {status === 'active' ? '活跃' : '禁用'}
        </span>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_: unknown, record: User) => (
        <Space size="middle">
          <Button
            onClick={() => handleEdit(record)}
            type="text"
            icon={<EditOutlined />}
            className="text-blue-600"
          />
          <Button
            type="text"
            onClick={() => handleDelete(record)}
            icon={<DeleteOutlined />}
            className="text-red-600"
          />
        </Space>
      ),
    },
  ]
  const formRef = useRef<FormInstance>(null)
  const [formTitle, setFormTitle] = useState('新增用户')

  useEffect(() => {
    if (open && formInfo) {
      formRef.current?.setFieldsValue(formInfo)
    } else {
      formRef.current?.resetFields()
    }
  }, [open, formInfo])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">用户管理</h1>
        <Space>
          <Input.Search
            placeholder="搜索用户"
            allowClear
            enterButton={<SearchOutlined />}
            size="middle"
            className="w-64"
          />
          <Button onClick={handleAdd} type="primary" icon={<PlusOutlined />}>
            新增用户
          </Button>
        </Space>
      </div>
      <Table columns={columns} dataSource={users} />

      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        title={formTitle}
      >
        <Form
          initialValues={formInfo}
          labelAlign="left"
          ref={formRef}
          style={{ maxWidth: 600 }}
          scrollToFirstError={{
            behavior: 'instant',
            block: 'end',
            focus: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: '请输入用户名!' }]}
            label="用户名："
          >
            <Input></Input>
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: '请输入邮箱!' }]}
            label="邮箱："
          >
            <Input></Input>
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: '请选择角色!' }]}
            name="role"
            label="角色："
          >
            <Select
              options={[
                { label: '用户', value: '用户' },
                { label: '管理员', value: '管理员' },
              ]}
            />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: '请选择状态!' }]}
            name="status"
            label="状态："
          >
            <Radio.Group>
              <Radio value="inactive"> 禁用 </Radio>
              <Radio value="active"> 活跃 </Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Users
