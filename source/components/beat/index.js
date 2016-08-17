export default (React) => {

  const {
    string, number
  } = React.PropTypes;

  const Beat = ({beatClass, rhClass, lhClass, rh, lh}) => {
    return (
      <div className={beatClass}>
        <div className={rhClass}>
          <p> rh: {rh} </p>
        </div>
        <div className={lhClass}>
          <p> lh: {lh} </p>
        </div>
      </div>
    );
  };

  Beat.propTypes = {
    beatClass: string.isRequired,
    rhClass: string.isRequired,
    lhClass: string.isRequired,
    rh: number.isRequired,
    lh: number.isRequired,
  };

  return Beat;
};
