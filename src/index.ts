/**
 * mini (~500 b) version for event-emitter.
 */

export interface Listener {
  cb: Function;
  once: boolean;
}

export interface EventsType {
  [eventName: string]: Listener[];
}

/**
 * const ee = new OnFire();
 *
 * ee.on('click', () => {});
 *
 * ee.on('mouseover', () => {});
 *
 * ee.emit('click', 1, 2, 3);
 * ee.fire('mouseover', {}); // same with emit
 *
 * ee.off();
 */
export default class OnFire {

  static ver = '__VERSION__';

  // 所有事件的监听器
  es: EventsType = {};

  on(eventName: string, cb: Function, once: boolean = false) {
    if (!this.es[eventName]) {
      this.es[eventName] = [];
    }

    this.es[eventName].push({
      cb,
      once,
    });
  }

  once(eventName: string, cb: Function) {
    this.on(eventName, cb, true);
  }

  fire(eventName: string, ...params: any[]) {
    const listeners = this.es[eventName] || [];

    for (let i = 0; i < listeners.length; i ++) {
      const { cb, once } = listeners[i];

      cb.apply(this, params);

      if (once) {
        listeners.splice(i, 1);
        i --;
      }
    }
  }

  off(eventName?: string, cb?: Function) {
    // clean all
    if (eventName === undefined) {
      this.es = {};
    } else {
      if (cb === undefined) {
        // clean the eventName's listeners
        delete this.es[eventName];
      } else {
        const listeners = this.es[eventName] || [];
        // clean the event and listener
        for (let i = 0; i < listeners.length; i ++) {
          if (listeners[i].cb === cb) {
            listeners.splice(i, 1);
            i --;
          }
        }
      }
    }
  }

  // cname of fire
  emit = this.fire;
}
