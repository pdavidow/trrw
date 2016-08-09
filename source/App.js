import createBeat from 'components/beat';

export default (React) => (props) => {
  const Beat = createBeat(React);
  return (
    <div>
      <Beat {...props}/>
    </div>
  );
};
