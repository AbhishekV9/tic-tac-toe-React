import React from 'react'

const Square = (props) => {
    return (
        <div className="square" onClick={()=>props.handle(props.index)}>
          {props.x ?'X' : props.o ?"O" : "" }
        </div>
    )
}

export default Square;