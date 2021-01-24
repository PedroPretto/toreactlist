import React, { useState } from 'react'
import CurrentDate from '../CurrentDate/'
import {CardList} from '../CardList/'
import BodyFooter from '../BodyFooter/'
import TodoInput from '../TodoInput/'

import {useDispatch, useSelector} from 'react-redux'
import * as TodoActions from '../../store/actions/todos'

const PageBody = () => {
    
    const [task, setTask] = useState({})
    const todos = useSelector(state => state)
    const dispatch = useDispatch()
     
    const handleChange = (e) => {
        setTask({name:e.target.value, isDone:false})
        
    }
    const handleClick = () => {
        dispatch(TodoActions.addTodo(task.name))
    }

    return(
        <div className="wrapper">
            <div className="ui">
                <CurrentDate/>
                <CardList items={todos}/>
                <div className="input">
                    <TodoInput value={task.name} onChange={handleChange}/>
                </div>
                <div className='footer'>
                    <BodyFooter onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default PageBody