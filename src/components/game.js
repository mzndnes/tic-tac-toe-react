import React,{useState} from 'react'
import { calculateWinner } from '../helper';
import Board from './board'

function Game() {
    const [board,setBoard]=useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    
    const handleClick=(i)=>{
        const bcopy=[...board]
        if (winner || bcopy[i]) return
        bcopy[i]=xIsNext?'X':'O'
        setBoard(bcopy)
        setXisNext(!xIsNext)


    }

    const jumpTo=()=>{

    }

    const renderMoves=()=>{
        return(
            <button onClick={()=>setBoard(Array(9).fill(null))}>
                Start Game
            </button>
        )
    }


    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div className="feed">
                <p>
                    {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
                    {renderMoves()}
                </p>
            </div>
        </>
    )
}

export default Game;