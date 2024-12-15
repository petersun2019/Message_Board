# Message Board (留言板)

一个简单的网页留言板系统，允许用户提交留言并实时显示在页面上。

## 功能特点

- 用户可以输入并提交留言内容
- 实时显示留言内容、IP地址和提交时间
- 自动换行显示长文本内容
- 固定的标题栏设计
- 响应式布局

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 在文本框中输入想要留言的内容
3. 点击"提交"按钮发布留言

## 页面布局

- 左上角显示英文标题 "Message Board" 和中文标题 "留言板"
- 页面中央是留言输入区域和留言展示区
- 留言展示区包含三列：内容、IP地址、日期时间

## 技术实现

- 纯前端实现，无需后端服务器
- 使用 HTML5 + CSS3 + JavaScript
- 使用 CSS Grid 实现页面布局
- 使用 position: sticky 实现标题栏固定

## 注意事项

- IP地址目前显示为默认值 (127.0.0.1)
- 页面刷新后数据会丢失
- 建议使用现代浏览器访问以获得最佳体验

## 未来改进计划

- [ ] 添加数据持久化存储
- [ ] 实现真实IP地址获取
- [ ] 添加留言编辑和删除功能
- [ ] 添加用户认证系统
- [ ] 添加留言回复功能

## 作者

[Peter Sun]

## 许可证

MIT License

## 文件结构 