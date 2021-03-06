import React from 'react'

export const Gif = ({ title, url}) => {
    return (
        <div className='card animate__animated animate__bounce animate__faster'>
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
