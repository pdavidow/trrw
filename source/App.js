import createBeatContainer from 'containers/beatContainer';

export default (React) => () => {
  const BeatContainer = createBeatContainer(React);

  return (
    <div>
      <BeatContainer />
    </div>
  );
};
