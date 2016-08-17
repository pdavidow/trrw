import { connect } from 'react-redux';
import createBeat from 'components/beat';

export default (React) => {
  const Beat = createBeat(React);
  const mapStateToProps = ({beat}) => ({
      ...beat,
      beatClass: 'beat',
      rhClass: 'rh',
      lhClass: 'lh'});

  return connect(
    mapStateToProps
  )(Beat);
};
