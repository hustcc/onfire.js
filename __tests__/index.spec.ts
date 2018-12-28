/**
 * @jest-environment node
 */

import EE from '../src';

describe('OnFire', () => {
  test('instance', () => {
    expect(typeof EE).toBe('function');
    expect(typeof EE.ver).toBe('string');
    expect(typeof new EE().on).toBe('function');
    expect(typeof new EE().once).toBe('function');
    expect(typeof new EE().emit).toBe('function');
    expect(typeof new EE().fire).toBe('function');
    expect(typeof new EE().off).toBe('function');
  });

  test('on', () => {
    const ee = new EE();

    const fn = jest.fn();
    ee.on('click', fn);
    ee.on('click', fn);

    ee.on('mouseover', fn);

    expect(ee.es).toEqual({
      click: [ { cb: fn, once: false }, { cb: fn, once: false } ],
      mouseover: [ { cb: fn, once: false } ],
    });
  });

  test('once', () => {
    const ee = new EE();

    const fn = jest.fn();
    ee.once('click', fn);
    // will skip
    ee.once('click', fn);
    ee.once('mouseover', fn);

    expect(ee.es).toEqual({
      click: [ { cb: fn, once: true }, { cb: fn, once: true } ],
      mouseover: [ { cb: fn, once: true } ],
    });
  });

  test('fire', () => {
    const ee = new EE();

    const fn = jest.fn();
    ee.on('click', fn);
    // will skip
    ee.once('click', fn);
    ee.once('mouseover', fn);

    ee.fire('click', 1, 2, 3);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenCalledWith(1, 2, 3);

    expect(ee.es).toEqual({
      click: [ { cb: fn, once: false } ],
      mouseover: [ { cb: fn, once: true } ],
    });
  });

  test('off', () => {
    const ee = new EE();

    const fn = jest.fn();
    ee.on('click', fn);
    // will skip
    ee.once('click', fn);
    ee.once('mouseover', fn);

    ee.emit('click', 1, 2, 3);

    expect(ee.es.click.length).toBe(1);

    ee.off('click', () => {});
    ee.off('click', fn);

    expect(ee.es.click.length).toBe(0);

    ee.off('mouseover');

    expect(ee.es.mouseover).toBe(undefined);

    ee.off('mouseover', fn);

    ee.off();

    expect(ee.es).toEqual({});

    ee.fire('click');
    ee.fire('hello');
  });
});
