import React from 'react'


const CurrentDate = () => {
    const months = ['JAN', 'FEV', 'MAR', 'ABR', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
    const weekday = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()
    const currentWeekDay = new Date().getDay()
    const currentDay = new Date().getDate()
    
    return(
        <div className='date'>
            
            <div className="left">
                <span className='day'>{currentDay}</span>
                <div className='month-year'>
                    <span className='month'>{months[currentMonth]}</span>
                    <span>{currentYear}</span>
                </div>
            </div>

            <div className="right">
                <span className='weekday'>{weekday[currentWeekDay]}</span>
            </div>
            
            
        </div>
    )
}

export default CurrentDate