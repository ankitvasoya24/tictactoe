import React, { useState } from 'react'


function Tictactoe() {
  const [input, Setinput] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState("O");
  const [winner, setWinner] = useState("");

  const Restart = () => {
  Setinput(Array(9).fill("")); // reset input
  setWinner(""); // reset winner
};

  function Check(index) {
    if (input[index] !== "" || winner !== "") {
      return;
    }

    input[index] = turn;
    Setinput([...input]);

    checkWinner(input);

    setTurn(turn === "O" ? "X" : "O");
  }

  function checkWinner(b) {
    if (b[0] !== "" && b[0] === b[1] && b[0] === b[2]) {
      setWinner(b[0] + " IS WIN");
      return;
    }
    if (b[3] !== "" && b[3] === b[4] && b[3] === b[5]) {
      setWinner(b[3] + " IS WIN");
      return;
    }
    if (b[6] !== "" && b[6] === b[7] && b[6] === b[8]) {
      setWinner(b[6] + " IS WIN");
      return;
    }
    if (b[0] !== "" && b[0] === b[3] && b[0] === b[6]) {
      setWinner(b[0] + " IS WIN");
      return;
    }
    if (b[1] !== "" && b[1] === b[4] && b[1] === b[7]) {
      setWinner(b[1] + " IS WIN");
      return;
    }
    if (b[2] !== "" && b[2] === b[5] && b[2] === b[8]) {
      setWinner(b[2] + " IS WIN");
      return;
    }
    if (b[0] !== "" && b[0] === b[4] && b[0] === b[8]) {
      setWinner(b[0] + " IS WIN");
      return;
    }
    if (b[2] !== "" && b[2] === b[4] && b[2] === b[6]) {
      setWinner(b[2] + " IS WIN");
      return;
    }

    if (!b.includes("")) {
      setWinner("MATCH IS DRAW");
    }
  }

  return (
    <div style={{textAlign:'center'}}>
      <h1>Tic Tac Toe</h1>
      <div className="box">
        {input.map((value, index) => (
          <input key={index} type="button" value={value} onClick={() => Check(index)} disabled={value !== "" || winner !== ""} />
        ))}
      </div>
      <h2>{winner !== "" ? winner : "Turn: " + turn}</h2>

      <button className='restart' onClick={Restart}>Restart</button>
    </div>
    
  );
}

export default Tictactoe;
