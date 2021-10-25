import React  from 'react'
import PropTypes  from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem'
import Masonry from 'react-masonry-css'


export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    
    const breakpointColumnsObj = {
        default: 4,
        1100: 4,
        700: 2,
        500: 1
      };
      

    return (
        <div className="gifgrid">
            <h3>{category}</h3>  
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
    
                {
                    images.map(img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                } 

            </Masonry>
            
    

        </div>

        
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

