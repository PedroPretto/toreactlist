import React from 'react'
import {useDispatch} from 'react-redux'
import * as TodoActions from '../../store/actions/todos'



const PageCard = (props) => {
    const dispatcher = useDispatch()
    const removeTodo = id => {
        dispatcher(TodoActions.removeTodo(id))
    }
    const toggleTodo = id => {
        dispatcher(TodoActions.toggleTodo(id))
    }
    return(
        <div className='card'>
            <div className='task'>
                <span className={props.complete ? 'done-task' : ''}>
                    {props.task}
                </span>
            </div>
            <div className="buttons">
                <button className='done' onClick={() => toggleTodo(props.id)} >&#10003;</button>
                <button className='delete' onClick={() => removeTodo(props.id)}>X</button>
            </div>
        </div>
    )
}

export default PageCard