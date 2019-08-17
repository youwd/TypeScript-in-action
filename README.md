# TypeScript-in-action
学习TypeScript

## 第一讲 TypeScript 基础环境配置  2019.07.28

## 第二讲 TypeScript 基本类型  2019.07.28

## 第三讲 TypeScript 接口 函数  2019.07.28

## 第四讲 TypeScript 类 Class  2019.07.28


## 第n讲 typescript 模块的导入导出
  1.es6的模块导入导出
  2.node模块：调试命令`ts-node ./src/modules/node/c.node.ts`
  3.生产环境的配置
    -tsconfig.json里"target": "es5",表示要编译的目标版本； "module": "commonjs",要编译成什么样的模块系统
    -tsc ./src/modules/node/a.node.ts -t es3;  es5:es6
    -tsc ./src/modules/node/a.node.ts -t es3 -m umd


