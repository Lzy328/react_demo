# React Admin Dashboard

一个基于React和Ant Design构建的现代化管理后台仪表盘。

## 技术栈

- **前端框架**: React 18
- **UI组件库**: Ant Design 5
- **路由管理**: React Router 6
- **构建工具**: Vite
- **样式方案**: Tailwind CSS
- **图表库**: ECharts (通过echarts-for-react)
- **语言**: TypeScript

## 功能特性

- ✅ 响应式布局设计
- ✅ 用户管理系统
- ✅ 数据可视化图表
- ✅ 统计卡片展示
- ✅ 导航菜单
- ✅ 表格数据展示

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

应用将在 `http://localhost:5173` 启动。

### 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist` 目录中。

### 预览生产构建

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

### 格式化代码

```bash
npm run format
```

## 项目结构

```
├── src/
│   ├── components/        # 通用组件
│   │   └── Layout/        # 布局组件
│   ├── pages/             # 页面组件
│   │   ├── Dashboard/     # 仪表盘页面
│   │   └── Users/         # 用户管理页面
│   ├── routes/            # 路由配置
│   ├── App.tsx            # 应用入口组件
│   └── main.tsx           # 应用入口文件
├── public/                # 静态资源
├── index.html             # HTML模板
├── vite.config.ts         # Vite配置
├── tsconfig.json          # TypeScript配置
├── tailwind.config.js     # Tailwind CSS配置
└── package.json           # 项目依赖和脚本
```

## 主要页面

### 仪表盘 (Dashboard)
- 数据统计卡片
- 用户增长趋势图表
- 关键指标展示

### 用户管理 (Users)
- 用户列表展示
- 用户搜索功能
- 新增用户功能

## 开发规范

- 组件使用TypeScript编写
- 使用Ant Design组件库
- 遵循ESLint和Prettier规范
- 组件化开发，提高代码复用性

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

MIT