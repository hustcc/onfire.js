# onfire.js

> nano version (~ 500b) for event-emitter.



## Install

> npm i --save onfire.js



## Usage

```js
import EE from 'onfire.js';

const ee = new EE();

ee.on('mouseover', () => {});

ee.once('click', () => {});

ee.emit('click', 1, 'hello', true);

ee.off('click');
```



## API

Simple and similar with `event-emitter`.


 - **on**(eventName: string, callback: Function): listen an event.
 - **once**(eventName: string, callback: Function): listen a event only once.
 - **emit**(eventName: string, ...parameters: any[]): emit / trigger an event with parameters.
 - **off**(eventName?: string, callback?: Function): unsubscribe an event.



## License

MIT@[hustcc](https://github.com/hustcc).
