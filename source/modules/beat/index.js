import {lcm} from 'mathjs';

export const tickCount = ({rh, lh}) => lcm(rh, lh);
