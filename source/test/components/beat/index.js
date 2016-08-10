import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import createBeat from 'components/beat';

const Beat = createBeat(React);
const render = reactDom.renderToStaticMarkup;

test('Beat', nest => {
  nest.test('rh, lh structure', assert => {
    const msg = 'Should have rh, lh classes';

    const props = {
      beatClass: 'beat',
      rhClass: 'rh',
      lhClass: 'lh'
    };

    const el = <Beat { ...props } />;
    const $ = dom.load(render(el));
    const output = $.html();

    const actual = {
      rh: Boolean($(`.${ props.rhClass }`).html()),
      lh: Boolean($(`.${ props.lhClass }`).html())
    };

    const expected = {
      rh: true,
      lh: true
    };

    assert.deepEqual(actual, expected, msg);
    assert.end();
  });

  nest.test('rh, lh default content', assert => {
    const msg = 'Should have rh, lh default values';

    const props = {
      beatClass: 'beat',
      rhClass: 'rh',
      lhClass: 'lh'
    };

    const el = <Beat { ...props } />;
    const $ = dom.load(render(el));
    const output = $.html();

    const actual = {
      rh: $(`.${ props.rhClass }`).innerText,
      lh: $(`.${ props.lhClass }`).innerText,
    };

    const expected = {
      rh: 0,
      lh: 0
    };

    assert.deepEqual(actual, expected, msg);
    assert.end();
  });
});

