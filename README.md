# 复制
> 基于vue的混入实现复制功能
+ 步骤
  - 在需要的组件中引入 `import { listener, handleCopy } from 'copyCommand.js';`
  - 混入 `mixins: [listener]`
  - methods中声明方法 `handleCopy(data) { handleCopy(data); }`
  - 调用 `<el-button type="primary" @click="handleCopy">复制</el-button>`