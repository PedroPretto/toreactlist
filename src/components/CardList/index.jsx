import React from 'react'
import PageBody from '../PageBody'
import PageCard from '../PageCard/'


export const CardList = (props) => {
    return(
        <div className='cardListWrapper'>
            <div className="cardsWrapper">
                {props.items.map((task,index) => {
                    return(
                        <PageCard id={task.id} key={index} complete={task.complete} task={task.text}/>
                    )
                })}
            </div>
        </div>
    )
}

