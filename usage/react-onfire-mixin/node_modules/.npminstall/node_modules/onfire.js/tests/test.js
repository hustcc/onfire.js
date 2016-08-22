'use strict';
var test = require('tape');
var onfire = require('..');

Object.prototype.test = 123;

test('onfire.js show be tested', function (t) {

  console.log('===================test on');
  var e1 = onfire.on('test_event', function(d) {
    t.equal(d, 't1_test_data');
  });
  var e2 = onfire.on('test_event_1', function(d) {
    t.fail(d);
  });


  console.log('\n===================test un');
  t.equal(onfire.un(e2), true);
  t.equal(onfire.un(e2), false);

  t.equal(onfire.un('test_event_1'), true);
  t.equal(onfire.un('test_event_1'), false);

  console.log('\n===================test fire');
  onfire.fire('test_event', 't1_test_data');
  onfire.fire('test_event_1', 't2_test_data');

  console.log('\n===================test clear');
  onfire.clear()


  console.log('\n===================test one');
  onfire.clear()
  var cnt = 0;
  onfire.one('test_event', function(d1, d2) {
    if (cnt == 0) {
      t.equal(d1, 'test_one_event_data1');
      t.equal(d2, 'test_one_event_data2');
      cnt ++;
    }
    else {
      t.fail(d);
    }
  });
  onfire.fire('test_event', 'test_one_event_data1', 'test_one_event_data2');
  onfire.fire('test_event', 'test_one_event_data1', 'test_one_event_data2');
  console.log('\n====================test class');

  var Testclass = {
    type: "macintosh",
    getExtInfo: function (ext_data, color) {
      t.equal(ext_data, 'ext_data');
      t.equal(color, 'blue');
      t.equal(this.type, 'macintosh');
    },
    getInfo: function (color) {
      t.equal(color, 'blue');
      t.equal(this.type, 'macintosh');
    },
    test: function() {
      onfire.on('test_event_class_in', Testclass.getInfo.bind(this));
      onfire.fire('test_event_class_in', 'blue');
    }
  }

  onfire.on('test_event_class', Testclass.getExtInfo.bind(Testclass, 'ext_data'));
  onfire.fire('test_event_class', 'blue');
  Testclass.test();

  console.log('\n====================test un function / event name / object');
  onfire.clear();
  function test_callback(type, d1, d2) {
    t.fail(type);
    t.fail(d1);
    t.fail(d2);
  }
  onfire.on('test_eventname', test_callback);

  var r = onfire.un('test_eventname');
  t.equal(r, true);
  onfire.fire('test_eventname', 1, 'test_event_data1', 'test_event_data2')

  e1 = onfire.on('test_object', test_callback);
  r = onfire.un(e1);
  t.equal(r, true);
  onfire.fire('test_object', 2, 'test_event_data1', 'test_event_data2')

  onfire.on('testfunc', test_callback);
  r = onfire.un(test_callback);
  t.equal(r, true);
  onfire.fire('testfunc', 3, 'test_event_data1', 'test_event_data2')

  t.pass('test un success');
  t.end();
});