# onfire.js

> **onfire.js** is a simple events dispatcher library (less then 1kb). simple and usefull. 

Can be used in:

 - simple events dispatcher.
 - `Cross-component communication` of react / vue.js / angular.
 - evnets subscribe and publish.

中文版说明文档[点这里](README_zh.md)。

[![Build Status](https://travis-ci.org/hustcc/onfire.js.svg?branch=master)](https://travis-ci.org/hustcc/onfire.js) [![npm](https://img.shields.io/npm/v/onfire.js.svg?style=flat-square)](https://www.npmjs.com/package/onfire.js) [![npm](https://img.shields.io/npm/dt/onfire.js.svg?style=flat-square)](https://www.npmjs.com/package/onfire.js) [![npm](https://img.shields.io/npm/l/onfire.js.svg?style=flat-square)](https://www.npmjs.com/package/onfire.js)


# API method

**1. `on(event_name, callback)`**

Binding the `event_name` with `callback`. when has event named `event_name` fired, `callback` function will process.

The function will return the `eventObj`, which can be used to cancel bind with API `un(eventObj)`.

**2. `fire(event_name, data)`**

Trigger the event named `event_name`, and with `data` as the input of `callback` function.

**3. `un(eventObj / eventName)`**

Cancel binding event. You can unbinding a event Object, or just unbinding a event_name.

**3. `size()`**

Get the event size.

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

Use `on` to subscribe event, use `un` to cancel, and use `fire` to trigger the event.

```js
import onfire from 'onfire.js';
// init the object
onfire = onfire();

// bind event and callback
var eventObj = onfire.on('test_event', function(data) {
	console.log('this is a event 1');
});
var eventObj2 = onfire.on('test_event', function(data) {
	console.log('this is a event 2');
});

// fire event
onfire.fire('test_event', 'test_data');

// cancel bind event
onfire.un(eventObj); // only cancel the eventObj.
onfire.un('test_event'); // cancel all events named `test_event`.

// size of events
onfire.size();
```


# TODO

 - **clear()**：clear all events;
 - **events()**：get all event name array;


# LICENSE

MIT