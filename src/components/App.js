import React, { useEffect, useState } from "react";
import "../styles/App.css";
import p1 from "./images/image_part_001.jpg";
import p2 from "./images/image_part_002.jpg";
import p3 from "./images/image_part_003.jpg";
import p4 from "./images/image_part_004.jpg";
import p5 from "./images/image_part_005.jpg";
import p6 from "./images/image_part_006.jpg";
import p7 from "./images/image_part_007.jpg";
import p8 from "./images/image_part_008.jpg";

const data = {
  1: p1,
  2: p2,
  3: p3,
  4: p4,
  5: p5,
  6: p6,
  7: p7,
  8: p8,
};

const initialState = [
  [8, 5, 3],
  [4, "empty", 2],
  [7, 1, 6],
];

const PuzzlePiece = () => {
  //Use images from data variable for all pieces.
  //For empty div, give class name "empty" and no image. 
  return <td className={`puzzle-piece`}>{true && <img />}</td>;
};

const PuzzleBoard = () => {
  // Set initialState variable as the initial state of the Game State. 
  const checkWin = () => {};
  const handleClick = (rowIndex, columnIndex) => {};

  return (
    <table>
      <tbody>
        {/* Loop over rows */}
        <tr>
          {/* Loop over cols */}
          <PuzzlePiece />
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  const [gameWon, setGameWon] = useState(false);
  return (
    <div id="main" className="container">
      <h1 className="title">8 Puzzle Game</h1>
      {gameWon && (
        <div className="game-won">
          <h1>You won!</h1>
        </div>
      )}
      <PuzzleBoard />
    </div>
  );
};

export default App;
