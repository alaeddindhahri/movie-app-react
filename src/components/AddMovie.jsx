import React, { Component } from 'react'

export default class AddMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            movieTitle:null,
            movieRelease:null,
            moviePoster: null,
            movieRating:null
        }
    }
    handleTitle=(e)=>{
        this.setState({
            movieTitle:e.target.value
        })
    }
    handleRelease=(e)=>{
        this.setState({
            movieRelease:e.target.value
        })
    }
    handlePoster=(e)=>{
        this.setState({
            moviePoster:e.target.value
        })
    }
    handleRating=(e)=>{
        this.setState({
            movieRating: e.target.value
        })
    }
    render() {
        return (
            <div className="modal-container" style={{display:this.props.isOpen?'block':'none'}}>
                <form className="form-modal">
                    <input type="text" className="modal-input title-input" placeholder="title..." onChange={this.handleTitle}/>
                    <input type="text" className="modal-input release-input" placeholder="release year..." onChange={this.handleRelease}/>
                    <input type="text" className="modal-input poster-input" placeholder="poster link..." onChange={this.handlePoster}/>
                    <div className="modal-rating-options">
                        <input type="radio" name="rating" value="1" onChange={this.handleRating}/>1
                        <input type="radio" name="rating" value="2" onChange={this.handleRating}/>2
                        <input type="radio" name="rating" value="3" onChange={this.handleRating}/>3
                        <input type="radio" name="rating" value="4" onChange={this.handleRating}/>4
                        <input type="radio" name="rating" value="5" onChange={this.handleRating}/>5
                    </div>
                    <button className="btn-primary btn-confirm" type="button" onClick={()=>{this.props.handleAdd(this.state.movieTitle,this.state.movieRelease,this.state.moviePoster,this.state.movieRating); this.props.handleModalToggle()}}>Confirm</button>
                </form>
            </div>
        )
    }
}
