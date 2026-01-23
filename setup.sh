#!/bin/bash

set -e

echo "===== 前端 setup.sh 开始 ====="

# 默认参数
ENV=${1:-prod}

echo ">>> 1. 执行 ESLint"
pnpm run lint

# 3. 按环境构建
if [[ "$ENV" == "test" ]]; then
  echo ">>> 构建测试环境包（vite --mode test）"
  pnpm run build:test
else
  echo ">>> 构建生产环境包"
  pnpm run build
fi

echo "===== 前端 setup.sh 完成 ====="