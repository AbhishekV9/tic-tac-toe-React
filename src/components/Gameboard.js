import React from 'react';
import { useState } from 'react';
import { Square } from './Square'

const squareArray=[null,null,null,null,null,null,null,null,null]

export const Gameboard = () => {
    const [squares,setSquares]=useState(squareArray)
    return (
        <div className="game-board">
            {squares.map((square,index)=>{
                
                return <Square key={index}/>
            })}
        </div>
    )
}
