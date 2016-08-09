import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import createApp from 'App.js';

const render = reactDom.renderToStaticMarkup;
const App = createApp(React);

test('Metronome', assert => {
  const msg = 'Should render all sections.';

  const props = {
    beatClass: 'beat'
  };

  const el = <App{ ...props } />;
  const $ = dom.load(render(el));

  const actual = {
    Beat: Boolean($(`.${ props.beatClass }`).html())
  };

  const expected = {
    Beat: true,
  };

  assert.deepEqual(actual, expected, msg);

  assert.end();
});
