import React, {useState} from 'react'
import './MovieComponent.css'

const MovieComponent = ({movieItem}) => {
    return (
        <div className="card">
            {/* <div className='image-container'>
                <img src='https://i.ytimg.com/vi/KFZInkDMoAU/maxresdefault.jpg' className="image" />
            </div> */}
          <div className="text-container">
          <h3>{movieItem.movieName}</h3>
            <p className="year">({movieItem.movieYear})</p>
            <p className="rating-label">IMDb Rating : <span className="rating">{movieItem.imdbRating}/10</span></p>
            <p className="genre">
              Genre : {movieItem.movieGenre1}, {movieItem.movieGenre2}
            </p>
          </div>
        </div>
      )
}

export default MovieComponent