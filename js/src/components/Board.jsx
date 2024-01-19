/* eslint-disable react/prop-types */
import Square from "./Square";

const Board = ({ squares }) => {
  return (
    <div className="group grid place-content-center sm:w-[450px] w-[300px] h-[300px] sm:h-[450px] grid-cols-3">
      {squares.map((square, index) => (
        <Square key={index} value={square} className="sm:w-[150px] w-[100px] h-[100px] sm:h-[150px] border-dark_pink items-center justify-center" />
      ))}
    </div>
  );
};

export default Board;
