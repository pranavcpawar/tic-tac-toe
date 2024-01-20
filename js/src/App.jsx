import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {

  const [squares, setSquares] = useState([0,1,2,3,4,5,6,7,8]);


  return (
      <div className='flex flex-col place-content-center gap-[40px] mx-auto'>
        <h1 className='text-5xl font-semibold p-4'>TIC TAC TOE</h1>
        <Board squares={squares} />
        <button className="bg-dark_pink rounded-[8px] text-black text-lg font-semibold p-2 border-none">RESET</button>
      </div>
  )
}

export default App
