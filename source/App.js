import createPiece from 'containers/piece';

export default (React) => (props) => {
  const Piece = createPiece(React);

  return (
    <div>
      <Piece />
    </div>
  );
};
