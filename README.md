# 复制
> 基于vue的混入实现复制功能

## 直接引入复制组件使用
> 单纯的想要一个复制按钮，直接引入该组件就好。复制组件依赖copyCommand工具类，需一起放在项目里

## 在js里使用
+ 步骤
  - 在需要的组件中引入 `import { listener, handleCopy } from 'copyCommand.js';`
  - 混入 `mixins: [listener]`
  - 在js里使用，`data`为复制的内容
    * js里直接调用`handleCopy(data)`方法