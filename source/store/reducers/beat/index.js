export default (
  state = {rh: 0, lh: 0}, {type, count} = {}
) => {

  switch (type) {
    case 'SET_RH': return {...state, rh: count};
    case 'SET_LH': return {...state, lh: count};
    default: return state;
  }

};

