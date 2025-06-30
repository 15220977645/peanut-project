- index.vue

  1.错误: Uncaught (in promise) TypeError: fullscreen error
  原因：Failed to execute 'requestFullscreen' on 'Element': API can only be initiated by a user gesture.
  （触发全屏需要用户手动触发，不可以自动触发）
  报错出处：src\layout\index.vue
  134：screenfull.request()

  2.全屏开启/退出切换

  - 注意点

  1. screen.availWidth / screen.availHeight: 全屏下可支配的宽度/高度像素
  2. F11 默认事件可切换全屏状态，但作用于浏览器，并不是当前界面, 需用 e.preventDefault()取消默认事件, 再重写事件
  3. F12 会修改 screen.availWidth
  4. screenfull 插件：screenfull.request()--开启全屏; screenfull.exit()--退出全屏

  分辨率-全屏状态-警告：三者联动关系
  screen.availHeight：全屏下可支配的高度像素 px
  F12: 会影响 screen.availWidth
  分辨率更改：
  ①.用户拖拉缩放浏览器触发
  ②.全屏切换触发
  全屏切换的选择：由当前警告显示的状态判断，通过分辨率间接更改警告显示状态
  警告显示：由分辨率是否布满判断，其中允许 10px 的差异（已发现有 1px 的差异）

- indexDevelopInfo.vue

  1. data 变量说明：
     scrollStatus：动画开关-鼠标移入移出时改变

  2. watch 监听-newsList:
     动画计时器 setInterval 执行条件需要新闻内容高度 > 展示区高度： if (scrollHeight > showHeight)

  3. 数据处理
     需要把富文本数据中的图文分开，把图片匹配至一个数组里
     方法： 1.用正则表达式：/<img [^>]_src=['"]([^'"]+)[^>]_>/g 2.用 replace 中的函数把匹配的每一项匹配至数组中，并用空字符串替代

  4. 动画逻辑
     总体逻辑：滚动层写一个节点，当滚动至离结尾还有一个显示单位的距离时做出处理，若滚动层只有一个节点，则克隆添加第二节点；否则改变下一个需要显示的节点 Top 偏移量。

  5. 逻辑讲解
     x: 一层的高度
     ┌───────┐----一.0 ---》 滚动已过 0 组
     ├───────┤----二.10
     ├───────┤----一.2x + 0 ---》 滚动已过 1 组
     ├───────┤----二.2x + 10
     ├───────┤----一.4x + 0 ---》 滚动已过 2 组
     ...

  - 相对定位偏移量 === 一层高度 \* 倍数

  倍数 === 已过组数 \* 2; 已过组数 === 四舍五入(滚过的偏移量 / 一组的高度)
