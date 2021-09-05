import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/GetGifs';
import { Gif } from './Gif';

// import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3> { category } </h3>
            { loading && 'Cargando...' }

            <div className='card-grid'>
                {
                    images.map((img) =>(
                        <Gif
                            key={ img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}

// GifGrid.propTypes = {
// }

export default GifGrid
