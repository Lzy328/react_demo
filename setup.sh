#!/bin/bash

set -e

echo "===== 前端 setup.sh 开始 ====="

echo ">>> 1. 执行 ESLint"
pnpm run lint


pnpm run build

echo "===== 前端 setup.sh 完成 ====="