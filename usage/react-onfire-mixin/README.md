# react-onfire-mixin

用于 react 跨组件通信的 Mixin。


## 1. 下载

> npm install react-onfire-mixin

或者

直接拷贝 src 中文件到自己项目中。

## 2. 使用

第一个组件，接收 on 事件：

```js
import React from 'react';
import OnFireMixin from 'react-onfire-mixin';

const Component_1 = React.createClass({
  __ONFIRE__: 'Component_1', // 一定要有
  propTypes: {},
  mixins: [OnFireMixin],  // 引入 mixin
  do_what: function(data) {
  },
  componentDidMount: function() {
    this.on('my_event', this.do_what);
  },
  render: function() {

    return (
      <div>
        Component_1
      </div>
    );
  }
});

export default Component_1;
```

第二个组件，触发 fire 事件：

```js
import React from 'react';
import OnFireMixin from 'react-onfire-mixin';

const Component_2 = React.createClass({
  __ONFIRE__: 'Component_2', // 一定要有
  propTypes: {},
  mixins: [OnFireMixin],  // 引入 mixin
  
  componentDidMount: function() {
    this.fire('my_event', "hello, this is event data.");
  },
  render: function() {
    return (
      <div>
        Component_2
      </div>
    );
  }
});

export default Component_2;
```

## 说明

onfire.js 是一个事件订阅分发的库，可以自行封装 react、vue的组件通信类，这个 `react-onfire-mixin` 是我在项目中的使用方式。建议使用。