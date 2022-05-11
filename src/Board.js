import Dice from './Dice';

function Board({ name, color, num, sum, gameHistory }) {
  return (
    <div>
        <h2>{name}</h2>
        <Dice color={color} num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        {gameHistory.join(', ')}
    </div>
  );
}

export default Board;
