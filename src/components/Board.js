import Dice from './Dice';

function Board({ name, color, gameHistory }) {
  const num = gameHistory[gameHistory.length - 1] || 1; //현재 주사위의 눈(num)은 기록(gameHistory)의 마지막 값
  const sum = gameHistory.reduce((a, b) => a + b, 0);   //총점(sum)은 기록(gameHistory)의 합

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
