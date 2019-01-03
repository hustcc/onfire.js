# 如何进行跨组件通信

> 分步骤介绍如何在 React 中使用 onfire.js 事件的方式去进行跨组件通信。

举个场景例子：页面顶部的搜索框（Search）根据下面加载的内容（Content）页面不同，显示不同的默认内容。也就是 Content 组件需要发送数据给 Search 组件。


 - 安装
 
> npm i --save onfire.js


 - 公共模块创建事件

例如，在整个系统的公共模块中创建一个 onfire 实例，用于数据通信。比如 `common.js` 中：

```js
import OnFire from 'onfire.js';
// 创建 onFire 事件实例
const onFire = new OnFire();

// 导出，给 Search、Content 组件使用
export default onFire;
```

 - Search 组件中监听事件
 
我们定义事件名称为：`keywordEventName`，然后在 Search 组件中监听事件，代码如下：

```js
import onFire from './common.js';

// 组件加载之后，监听事件
function onLoad() {
  onFire.on('keywordEventName', function(keyword) {
    // 设置搜索框默认的搜索关键字
    setDefaultKeyword(keyword);
  });
}
```

 - Content 组件发送数据
 
```js
import onFire from './common.js';

// 组件加载之后，发送数据
function onLoad() {
  onFire.fire('keywordEventName', 'Content 页面的关键字');
}
```

> 完成之后，效果就是，在 Content 组件加载之后，会将 `'Content 页面的关键字'` 发送到 Search 组件中。切换不同的内容，可以实现发送不同的数据。


----

以上伪代码，并不一定在 React 才能使用，在 Vue、Angular，甚至小程序上，原理都是一样的，通过事件的监听和发布机制，事件数据的通信。
