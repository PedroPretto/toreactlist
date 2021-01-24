import React from 'react'

const TodoInput = (props) =>{
    return(
        <input type="text" value={props.task} onChange={props.onChange}/>
    )
}

export default TodoInput