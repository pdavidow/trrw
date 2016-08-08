console.log("beat start");
import test from 'tape';
import deepFreeze from 'deep-freeze';

import beat from 'store/reducers/beat';

test('SET_MODE', nest => {
  nest.test('...initial', assert => {
    console.log("beat test");
    const message = `should set {rh: 0, lh: 0}`;

    const expected = {
      rh: 0,
      lh: 0
    };

    const actual = beat();

    assert.deepEqual(actual, expected, message);
    assert.end();
  });

/*
  nest.test(`...with { mode: 'edit' }`, assert => {
    const message = 'should set mode to edit mode';

    const stateBefore = {
      mode: 'display',
      subject: 'World'
    };
    const action = {
      type: 'SET_MODE',
      mode: 'edit'
    };
    const expected = {
      mode: 'edit',
      subject: 'World'
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const actual = hello(stateBefore, action);

    assert.deepEqual(actual, expected, message);
    assert.end();
  });

  nest.test(`...with { subject: 'foo'}`, assert => {
    const message = 'should set subject to "foo"';

    const stateBefore = {
      mode: 'display',
      subject: 'World'
    };
    const action = {
      type: 'SET_SUBJECT',
      subject: 'foo'
    };
    const expected = {
      mode: 'display',
      subject: 'foo'
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const actual = hello(stateBefore, action);

    assert.deepEqual(actual, expected, message);
    assert.end();
  });
*/
});
