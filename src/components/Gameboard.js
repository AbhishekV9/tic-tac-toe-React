import React from 'react';
import { useState,useEffect } from 'react';
import Square  from './Square'

const squareArray=[null,null,null,null,null,null,null,null,null]

const lines=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]
]

export const Gameboard = () => {
    const [squares,setSquares]=useState(squareArray)
    
    useEffect(()=>{
        const filledSquares=squares.filter((squareValue)=>{
            return (squareValue!==null)
        })
        const isComputerTurn=filledSquares.length %2 ===1;
        // const checkLines=(a,b,c)=>{
        //     return lines.filter(threeSquares=>{
        //         const values=threeSquares.map(index=>squares[index]);
        //         // return [a,b,c].equals(values.sort());
        //     })
        // }
        //const playerWon=checkLines('x','x','x');
        //if(playerWon){alert("player won")};
        const computerMark=index=>{
            let copySquares=squares.slice();  
            copySquares[index]="o";
            setSquares(copySquares)
        }

        if(isComputerTurn){
            const EmptyIndex=squares.map((square,index)=>{
                 return square===null?index:null
            }).filter(val=>val!==null);
            console.log(EmptyIndex)
            if(EmptyIndex.length!==0){
            const randomIndex=EmptyIndex[Math.ceil(Math.random()*EmptyIndex.length)]
             computerMark(randomIndex);
            }
        }
    },[squares])

    function handleClick(index){
        const filledSquares=squares.filter((squareValue)=>{
            return (squareValue!==null)
        })
        const ismyTurn=filledSquares.length %2 ===0;
        if(ismyTurn){
            let copySquares=squares.slice();  //we can also use slice to clone an array
            copySquares[index]="x";
            setSquares(copySquares)
        }
    }

    
    return (
        
        <div className="game-board">
            {squares.map((squareValue,index)=> 
                <Square 
                key={index} 
                handle={handleClick} 
                index={index}
                x={squareValue==='x'?true:false}
                o={squareValue==='o'?true:false} 
                />
            )}
        </div>
    )
}