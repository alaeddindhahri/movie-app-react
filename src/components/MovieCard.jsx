import React, { Component } from 'react'

export default class MovieCard extends Component {
    render() {
        const {title,release,imageUrl,ratingUrl}=this.props.myMovie;
        return (
            <div className="movie-card">
                <img className="movie-poster" src={imageUrl}/>
                <img className="movie-rating" src={ratingUrl}/>
                <p className="movie-title-release">{title} - {release}</p>
            </div>
        )
    }
}
