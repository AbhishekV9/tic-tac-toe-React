import React from 'react'

const Square = (props) => {
    const secondClass=props.x ? null : props.o ?"computer" : "" ;
    const classes=`square ${secondClass}`
    return (
        <div className={classes} onClick={()=>props.handle(props.index)}>
          {props.x ?'x' : props.o ?"o" : "" }
        </div>
    )
}

export default Square;