# AshowUI
基于航展项目封装的UI组件库








按钮组价丶模态框组件丶表单相关组件  10个左右的组件 组件库 说白就是Vue的插件 类似element-UI一样 可以全局安装 全局导入 发布到npm上去 这样的话 你下载就能使用


涉及的知识点
Vue基础语法
组件基本语法（sync丶provide丶inject）
组件通信
插槽的使用
props校验
过渡与动画处理
计算属性与监听属性
v-model 语法糖
vue插件机制
npm发布




需要之间需要安装这个组件库
yarn add itcast-ui 安装组件库

在main.js全部引入这个组件库 
`import ItcastUI from  itcast-ui`  

导入样式文件
`import itcast-ui/lib/itcast-ui.css`

因为是Vue的插件
`Vue.use(ItcastUI)` 

启动
`yarn server`





建立Vue脚手架
`vue create ashow-ui`

Babel
CSS预处理语言
`CSS Pre-processssors`
代码校验
`Linter / formatter`

为什么选Sass
在这个组件库里面会用到字体图标 字体图标里面的文件用到的sass文件 所以用到了Sass 而且element-ui的源码用到的也是sass

把配置文件生成package.json就行了
使用vue脚手架快速初始化一个项目




前置知识
组件通讯
组件插槽
props校验


但凡你封装这个组件 内容不去定死 可以使用插槽

任何UI组件库都要提供字体图标
我们的UI组件库如何提供字体图标







