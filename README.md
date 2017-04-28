# onfire.js

> **onfire.js** is a simple events dispatcher library (just `0.9kb`). simple and usefull. 

Can be used in:

 - simple events dispatcher.
 - `Cross-component communication` of react / vue.js / angular.
 - evnets subscribe and publish.

Live DEMO [**here**](http://git.hust.cc/onfire.js). 中文版说明文档[点这里](README_zh.md)。

[![Build Status](https://travis-ci.org/hustcc/onfire.js.svg?branch=master)](https://travis-ci.org/hustcc/onfire.js) [![npm](https://img.shields.io/npm/v/onfire.js.svg?style=flat-square)](https://www.npmjs.com/package/onfire.js) [![npm](https://img.shields.io/npm/dt/onfire.js.svg?style=flat-square)](https://www.npmjs.com/package/onfire.js) [![npm](https://img.shields.io/npm/l/onfire.js.svg?style=flat-square)](https://www.npmjs.com/package/onfire.js)


## 1. API method

**1. `on(event_name, callback, context)`**

Binding / subscribe the `event_name` with `callback`. when has event named `event_name` fired, `callback` function will process.

The function will return the `eventObj`, which can be used to cancel bind with API `un(eventObj)`.

**2. `one(event_name, callback, context)`**

Binding / subscribe the `event_name` with `callback` only once. And it is will timeout after Trigger.

`Only can be Trigger once`, then it will be deleted automation.

**3. `fire(event_name, data1, data2, data3, ...)`**

`Async` Trigger / subscribe the event named `event_name`, and with `datas` as the input of `callback` function.

**4. `fireSync(event_name, data1, data2, ...)`**

`Sync` Trigger / subscribe the event named `event_name`, and with `datas` as the input of `callback` function.

**5. `un(eventObj / event_name / function)`**

Cancel binding event. You can unbinding a event Object, or just unbinding a event_name, or unbind the callback function.

Get the exist events Array.

**6. `clear()`**

Clear all the event.


## 2. Detail Usage

**1. import library**

Install javascript library.

> npm install onfire.js

You can import it with `<script>` tag, or use keyword `require` or `import`.

```js
import onfire from 'onfire.js';

// or

var onfire = require("onfire.js");
```

**2. simple usage**

Use `on` to subscribe event, use `un` to cancel, and use `fire` to publish / trigger the event.

```js
import onfire from 'onfire.js';

function test_callback(data1, data2) {
	console.log('this is a event 1');
}

// bind event and callback
var eventObj = onfire.on('test_event', test_callback);
var eventObj2 = onfire.on('test_event', function(data1, data2) {
	console.log('this is a event 2');
});

// fire event
onfire.fire('test_event', 'test_data1', 'test_data2');

// cancel bind event
onfire.un(eventObj); // only cancel the eventObj.
onfire.un('test_event'); // cancel all events named `test_event`.
onfire.un(test_callback); // cancel all the `test_callback` functions.
```


## LICENSE

MIT@[hustcc](https://github.com/hustcc)