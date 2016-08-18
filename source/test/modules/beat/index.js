import test from 'tape';
import { tickCount } from 'modules/beat';

test('Beat module', nest => {
  nest.test('tick count', assert => {
    const msg = 'Beat tick count should equal lowest common multiple of rh and lh';

    let actual = tickCount({rh: 3, lh: 4});
    let expected = 12;
    assert.equal(actual, expected, msg);

    actual = tickCount({rh: 8, lh: 6});
    expected = 24;
    assert.equal(actual, expected, msg);

    actual = tickCount({rh: 0, lh: 0});
    expected = 0;
    assert.equal(actual, expected, msg);

    assert.end();
  });
});

