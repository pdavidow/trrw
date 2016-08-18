import {lcm} from 'mathjs';

const tickCount = ({rh, lh}) => lcm(rh, lh);

const tickIndices = ({noteCount, tickCount}) => {
  const interval = tickCount / noteCount;
  const indicies = [];
  let index = 0;

  while (index < tickCount) {
    indicies.push(index);
    index += interval;
  }
  return indicies;
};

const rhTickIndices = ({rh, lh}) => tickIndices({noteCount: rh, tickCount: tickCount({rh, lh})});
const lhTickIndices = ({rh, lh}) => tickIndices({noteCount: lh, tickCount: tickCount({rh, lh})});

export {tickCount, rhTickIndices, lhTickIndices};

