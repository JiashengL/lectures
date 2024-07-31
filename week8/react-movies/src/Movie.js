import React from 'react'
import LikeButton from './LikeButton'

export default function Movie(props) {
  return (
    <div className="col-sm-3 text-center mb-2 poster">
      <img src={'http://image.tmdb.org/t/p/w185' + props.poster_path} className="img-fluid" alt={props.title} />

      <p className="mt-2">
        {props.release_date ? props.release_date.substr(0, 4) : null}
        <span className="badge bg-primary mx-3">
          {props.vote_average.toFixed(1)}
        </span>
        <LikeButton movieId={props.movieId} title={props.title} onClicked={props.onLiked} counter={props.likes} key={props.title} />
      </p>
    </div>
  )
}
