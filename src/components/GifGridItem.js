import React from 'react'

export const GifGridItem = ( {title, url}) => {


    return (
            <div className="card">
                <img className="card-img-top" src={url} alt={title} />
                <div className="card-body">
                    <p className="card-text">{title}</p>
                </div>
            </div>
    )
}


