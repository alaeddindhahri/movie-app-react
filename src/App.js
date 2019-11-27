import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Title from './components/AppTitle'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import AddMovie from './components/AddMovie'

import stars1 from './img/1star.png'
import stars2 from './img/2stars.png'
import stars3 from './img/3stars.png'
import stars4 from './img/4stars.png'
import stars5 from './img/5stars.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moviesList: [{
        title: 'Joker',
        release: '2019',
        imageUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/08/joker-poster-main2.jpg',
        ratingUrl: stars5,
        rating: 5
      }, {
        title: 'Alita',
        release: '2019',
        imageUrl: 'https://i.etsystatic.com/19472203/r/il/e27854/1763716170/il_794xN.1763716170_mzto.jpg',
        ratingUrl: stars4,
        rating: 4
      }, {
        title: 'El Camino',
        release: '2019',
        imageUrl: 'https://i.redd.it/vxj9weop6hi31.jpg',
        ratingUrl: stars3,
        rating: 3
      }, {
        title: 'Midway',
        release: '2019',
        imageUrl: 'http://www.impawards.com/2019/posters/midway_xlg.jpg',
        ratingUrl: stars2,
        rating: 2
      }],
      tmpMovies:[false],
      isOpen: false
    }
    
  }
  /*********Search function *******/
  handleSearch = (strSearch, starsSearch) => {
    let tmpMoviesList; 
    const reg = RegExp(strSearch, 'gi')
    const nStars = starsSearch.reduce((acc, cur) => acc += cur ? 1 : 0)

    //search based on combination of movies title && rating
    //set a temporary copy of the main movies list {moviesList} then filter the copy
    //map will show original data at first, then will iterate over the copy of the original list
    if(strSearch!=="" && nStars>0){
      this.setState({
        tmpMovies: [...this.state.moviesList]
      })
      tmpMoviesList=this.state.moviesList.filter(arrMovies => arrMovies.title.match(reg))
      tmpMoviesList=tmpMoviesList.filter(arrMovies => arrMovies.rating>=nStars)
    }
    else if(strSearch!=="" && nStars===0){
      this.setState({
        tmpMovies: [...this.state.moviesList]
      })
      tmpMoviesList=this.state.moviesList.filter(arrMovies => arrMovies.title.match(reg))
    }
    else if(strSearch==="" && nStars>0){
      this.setState({
        tmpMovies: [...this.state.moviesList]
      })
      tmpMoviesList=this.state.moviesList.filter(arrMovies => arrMovies.rating>=nStars)
    }
    else{
      this.setState({
        tmpMovies: [...this.state.moviesList]
      })
      tmpMoviesList=this.state.moviesList
    }
    this.setState({
      tmpMovies: tmpMoviesList
    })
  }
/*******Modal functions ********/
handleAdd=(movieTitle,movieRelease,moviePoster,movieRating)=>{
  let tmpStarsUrl;
  switch(movieRating){
    case '1':tmpStarsUrl=stars1
    break;
    case '2':tmpStarsUrl=stars2
    break;
    case '3':tmpStarsUrl=stars3
    break;
    case '4':tmpStarsUrl=stars4
    break;
    case '5':tmpStarsUrl=stars5
    break;
    default: break;
  }
  let tmpMovie={
    title:movieTitle,
    release: movieRelease,
    imageUrl: moviePoster,
    ratingUrl: tmpStarsUrl,
    rating: movieRating
  };
  this.setState({
    moviesList:[...this.state.moviesList,tmpMovie]
  })
}
handleModalToggle=()=>{
  this.setState({
    isOpen: !this.state.isOpen
  })
}
  render() {
    return (
      <div className="App">
        <Title />
        <AddMovie className="add-modal" isOpen={this.state.isOpen} handleModalToggle={this.handleModalToggle} handleAdd={this.handleAdd}/>
        <div className='container'>
          <SearchBar handleSearch={this.handleSearch} />
          <div className='movies'>
              {this.state.tmpMovies[0]===false?this.state.moviesList.map((el, key) =><MovieCard myMovie={el} key={key} />):this.state.tmpMovies.map((el, key) =><MovieCard myMovie={el} key={key} />)}
            <div className="add-movie-card">
              <a href="#" onClick={this.handleModalToggle}>+</a>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
