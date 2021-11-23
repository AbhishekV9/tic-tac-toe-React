import React from 'react';
import { useState,useEffect } from 'react';
import Square  from './Square'

const squareArray=[null,null,null,null,null,null,null,null,null]

const lines=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]
]

export const Gameboard = () => {
    const [squares,setSquares]=useState(squareArray);
    const [winner,setWinner]=useState(null);
    
    useEffect(()=>{
        const filledSquares=squares.filter((squareValue)=>{
            return (squareValue!==null)
        })
        const isComputerTurn=filledSquares.length %2 ===1;
        const checkLines=(a,b,c)=>{
            return lines.filter(threeSquares=>{
                const values=threeSquares.map(index=>squares[index]);
               return JSON.stringify(values.sort())===JSON.stringify([a,b,c].sort());
            })
        }
        const playerWon=checkLines('x','x','x');
        const computerWon=checkLines('o','o','o');
        if(computerWon.length>0){
            alert("computer win");
        }
        if(playerWon.length>0){
            alert("win");
        }
        const computerMark=index=>{
            let copySquares=squares.slice();  
            copySquares[index]='o';
            setSquares(copySquares)
        }

        if(isComputerTurn){

            const computerWinningChance=checkLines('o','o',null);
            if(computerWinningChance.length>0){
                console.log("fdfdfdfdfdf")
                const winningIndex=computerWinningChance[0].filter(index=>squares[index]===null)[0];
                computerMark(winningIndex);
                return;
            }

            const blockPlayer=checkLines('x','x',null);
            if(blockPlayer.length>0){
                const blockIndex=blockPlayer[0].filter(index=>squares[index]===null)[0];
                computerMark(blockIndex);
                return;
            }
            
            const closeToWin=checkLines('o',null,null);
            console.log(closeToWin)
            if(closeToWin.length>0){
                const nextMoveIndex=closeToWin[0].filter(index=>squares[index]===null)[0];
                computerMark(nextMoveIndex);
                return
            }

            const EmptyIndex=squares.map((square,index)=>{
                 return square===null?index:null
            }).filter(val=>val!==null);
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
        const ismyTurn=filledSquares.length %2 === 0;
        if(ismyTurn){
            let copySquares=squares.slice();  //we can also use slice to clone an array
            copySquares[index]='x';
            setSquares(copySquares);
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
