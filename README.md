# 复制
> 基于vue的混入实现复制功能
+ 步骤
  - 在需要的组件中引入 `import { listener, handleCopy } from 'copyCommand.js';`
  - 混入 `mixins: [listener]`
  - 在js里使用，`data`为复制的内容
    * js里直接调用`handleCopy(data)`方法
  - 在模板里使用
    * methods里声明 `doCopy(data) { handleCopy(data); }`
    * 调用 `<el-button type="primary" @click="doCopy">复制</el-button>`