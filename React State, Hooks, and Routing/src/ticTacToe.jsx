import { useState } from "react";
import './ticTacToe.css';

// Ялагчийг шалгах туслах функц
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // X эсвэл O
    }
  }
  return null; // Ялагч байхгүй
}

export function Board() {
  // Тоглоомын самбарын байдал: 9 хоосон нүд
  const [squares, setSquares] = useState(Array(9).fill(null));
  // Дараагийн тоглогчийг X-ээс эхлүүлнэ
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? "X" : "O";
  
  // 1. Товчлуур дээр дарах үеийн үйлдэл
  const handleClick = (i) => {
    // 8. Аль хэдийн дарсан эсвэл 9. Тоглоом дууссан бол юу ч хийхгүй
    if (squares[i] || winner) {
      return;
    }

    // Одоогийн самбарын хуулбарыг хийх
    const nextSquares = squares.slice();
    
    // Одоогийн тоглогчийн тэмдэгтийг тухайн нүдэнд оруулах (4 & 6)
    nextSquares[i] = nextPlayer;
    
    // Самбарын байдлыг шинэчлэх
    setSquares(nextSquares);
    
    // 7. Тоглогчийг ээлжлэн өөрчлөх
    setIsXNext(!isXNext);
  };
  
  // 10, 11. Тоглоомын төлөвийг харуулах
  let status;
  if (winner) {
    status = `Ялагч: ${winner}`;
  } else if (squares.every(s => s !== null)) {
    status = "Тэнцээ!"; // 11. Тэнцээ
  } else {
    status = `Дараагийн тоглогч: ${nextPlayer}`;
  }
  
  // 3. Тоглоомыг шинээр эхлүүлэх
  const handleReset = () => {
      setSquares(Array(9).fill(null));
      setIsXNext(true);
  };

  return (
    <div className="main1">
      <h1>Икс, О</h1>
      <p>{status}</p> {/* Төлөвийг харуулна */}
      <div className="container1">
        {squares.map((squareValue, index) => (
          <button 
            key={index}
            className="square1" 
            onClick={() => handleClick(index)}
          >
            {squareValue} {/* 4, 6, 7. X эсвэл O тэмдэгтийг харуулна */}
          </button>
        ))}
      </div>
      <button id="reset1" onClick={handleReset}>Шинээр эхлэх</button>
    </div>
  );
}