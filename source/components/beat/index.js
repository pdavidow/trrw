export default (React) => {

  const {
    number
  } = React.PropTypes;

  const Beat = ({rh, lh}) => {
    return (
      <div className='beat'>
        <div className='rh'>
          <p> rh: {rh} </p>
        </div>
        <div className='lh'>
          <p> lh: {lh} </p>
        </div>
      </div>
    );
  };

  Beat.propTypes = {
    rh: number.isRequired,
    lh: number.isRequired,
  };

  return Beat;
};
