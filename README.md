# onfire.js

> **onfire.js** is a simple events dispatcher library (just `0.8kb`). simple and usefull. 

Can be used in:

 - simple events dispatcher.
 - `Cross-component communication` of react / vue.js / angular.
 - evnets subscribe and publish.

中文版说明文档[点这里](README_zh.md)。

[![Build Status](https://travis-ci.org/hustcc/onfire.js.svg?branch=master)](https://travis-ci.org/hustcc/onfire.js) [![npm](https://img.shields.io/npm/v/onfire.js.svg?style=flat-square)](https://www.npmjs.com/package/onfire.js) [![npm](https://img.shields.io/npm/dt/onfire.js.svg?style=flat-square)](https://www.npmjs.com/package/onfire.js) [![npm](https://img.shields.io/npm/l/onfire.js.svg?style=flat-square)](https://www.npmjs.com/package/onfire.js)


# API method

**1. `on(event_name, callback)`**

Binding / subscribe the `event_name` with `callback`. when has event named `event_name` fired, `callback` function will process.

The function will return the `eventObj`, which can be used to cancel bind with API `un(eventObj)`.

**2. `one(event_name, callback)`**

Binding / subscribe the `event_name` with `callback` only once. And it is will timeout after Trigger.

`Only can be Trigger once`, then it will be deleted automation.

**3. `fire(event_name, data1, data2, data3, ...)`**

Trigger / subscribe the event named `event_name`, and with `datas` as the input of `callback` function.

**4. `un(eventObj / event_name)`**

Cancel binding event. You can unbinding a event Object, or just unbinding a event_name.

**5. `size()`**

Get the event size.

**6. `events()`**

Get the exist events Array.

**7. `clear()`**

Clear all the event.


# Detail Usage

**1. import library**

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
// init the object
onfire = onfire();

// bind event and callback
var eventObj = onfire.on('test_event', function(data1, data2) {
	console.log('this is a event 1');
});
var eventObj2 = onfire.on('test_event', function(data1, data2) {
	console.log('this is a event 2');
});

// fire event
onfire.fire('test_event', 'test_data1', 'test_data2');

// cancel bind event
onfire.un(eventObj); // only cancel the eventObj.
onfire.un('test_event'); // cancel all events named `test_event`.

// size of events
onfire.size();
```


# LICENSE

MIT