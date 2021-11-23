import React from 'react';
import { useState } from 'react';
import Square  from './Square'

const squareArray=[null,null,null,null,null,null,null,null,null]

export const Gameboard = () => {
    const [sq,setSq]=useState(squareArray)

    function handleClick(index){
        console.log("previous",sq);
        let copySquares=sq.slice();  //slice Basically clones the array and returns a reference to a new array.
        copySquares[index]="x";
        console.log("present",copySquares);
        setSq(copySquares)
    }

    
    return (
        
        <div className="game-board">
            {sq.map((s,index)=> 
                <Square 
                key={index} 
                handle={handleClick} 
                index={index}
                x={s==='x'?true:false}
                o={s==='o'?true:false} 
                />
            )}
        </div>
    )
}
