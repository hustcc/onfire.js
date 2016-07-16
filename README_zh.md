# onfire.js

> **onfire.js** 是一个很简单的事件分发的Javascript库（仅仅 `0.8kb`），简洁实用。

可以用于:

 - 简单的事件分发；
 - 在 react / vue.js / angular 用于跨组件的轻量级实现；
 - 事件订阅和发布；

English Version Readme. [Click Here](README.md)。

[![Build Status](https://travis-ci.org/hustcc/onfire.js.svg?branch=master)](https://travis-ci.org/hustcc/onfire.js) [![npm](https://img.shields.io/npm/v/onfire.js.svg?style=flat-square)](https://www.npmjs.com/package/onfire.js) [![npm](https://img.shields.io/npm/dt/onfire.js.svg?style=flat-square)](https://www.npmjs.com/package/onfire.js) [![npm](https://img.shields.io/npm/l/onfire.js.svg?style=flat-square)](https://www.npmjs.com/package/onfire.js)


# API 方法

**1. `on(event_name, callback)`**

绑定事件，参数为 `event_name` 和 `callback`， 当有名字为`event_name`的事件发生的时候，`callback`方法将会被执行。

这个方法会返回一个`eventObj`，这个可以用于使用`un(eventObj)`方法来取消事件绑定。

**2. `one(event_name, callback)`**

绑定（订阅）事件，参数为 `event_name` with `callback`. 当被触发一次之后失效。**`只能被触发一次，一次之后自动失效`**。

**3. `fire(event_name, data)`**

触发名字为 `event_name` 的事件，并且赋予系列变量`datas`为`callback`方法的输入值。

**4. `un(eventObj / event_name)`**

取消事件绑定。可以仅仅取消绑定一个事件回调方法，也可以直接取消全部的事件。

**5. `size()`**

获得当前的所有事件数量。

**6. `events()`**

返回所有的事件名称数组。

**7. `clear()`**

清空所有事件。


# 使用的DEMO

**1. 引入js文件**

> npm install onfire.js

可以使用 `<script>` 标签直接引入； 也可以使用 `require` 或者 `import` 关键字引入，会得到全局变量 onfire。

```js
import onfire from 'onfire.js';

// or

var onfire = require("onfire.js");
```

**2. 简单使用**

使用方法 `on` 来订阅事件, 使用 `un` 来取消订阅, 使用 `fire` 方法来触发事件。

```js
import onfire from 'onfire.js';

// 绑定事件
var eventObj = onfire.on('test_event', function(data1， data2) {
	console.log('this is a event 1');
});
var eventObj2 = onfire.on('test_event', function(data1, data2) {
	console.log('this is a event 2');
});

// 触发事件
onfire.fire('test_event', 'test_data1'， 'test_data2');

// 取消绑定
onfire.un(eventObj); // 取消绑定这个事件.
onfire.un('test_event'); // 取消绑定所有的 `test_event`.

// 长度
onfire.size();
```


# LICENSE

MIT