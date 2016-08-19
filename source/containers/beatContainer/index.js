import {connect} from 'react-redux';
import createBeat from 'components/beat';

export default (React) => {
  const Beat = createBeat(React);
  const mapStateToProps = ({beat}) => ({
      ...beat});

  return connect(
    mapStateToProps
  )(Beat);
};

