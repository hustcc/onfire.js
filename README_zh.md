# onfire.js

> 一个迷你版（~ 500b）的事件订阅和发布的库，简单实用。

[![Build Status](https://travis-ci.org/hustcc/onfire.js.svg?branch=master)](https://travis-ci.org/hustcc/onfire.js)
[![npm](https://img.shields.io/npm/v/onfire.js.svg)](https://www.npmjs.com/package/onfire.js)


[中文文档](./README_zh.md) | [English Doc](./README.md)


## 安装

> npm i --save onfire.js



## 使用

```js
import EE from 'onfire.js';

const ee = new EE();

ee.on('mouseover', () => {});

ee.once('click', () => {});

ee.fire('click', 1, 'hello', true);

ee.off('click');
```



## API 文档

非常简单，类似于 `event-emitter`。


 - `on(eventName: string, callback: Function)`：监听一个事件，触发后，执行指定的方法。
 - `once(eventName: string, callback: Function)`：仅监听一个事件一次，，触发后，执行指定的方法。
 - `fire(eventName: string, ...parameters: any[])`：触发一个指定的事件，并发送对应的数据。
 - `off(eventName?: string, callback?: Function)`：取消监听一个事件及方法，如果 callback 为空，则取消事件的所有方法；如果都为空，则取消所有事件监听。



## 使用场景

 - 事件订阅和发布的场景。
 - 在 React、Vue、Angular 中进行`跨组件通信`。
 - 系统的自定义事件机制。
 - 应用：[如何进行跨组件通信 —— React 实例](./doc/cross-component-communication-react.md)


## License

MIT@[hustcc](https://github.com/hustcc).
