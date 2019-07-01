## 简书的设计:
1. (脚手架创建项目)create-react-app jianshu
2. cd jianshu
3. yarn start
4. 清理没用的组件和文件
	+ 一个文件中引入的css文件可以全局有效
	+ 为了相互不影响, 使用 yarn add styled-components
	+ injectGlobal已经被弃用, 使用createGlobalStyle代替
	+ 使用reset.css 文件, 将文件中的内容全部拷贝到createGlobalStyle中去;
    + 使标签 样式在所有浏览器上一致