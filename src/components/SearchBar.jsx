import React,{Component} from 'react';
import Star from '../img/star.png';

export default class searchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            searchInput:"",
            searchStars:[false,false,false,false,false]
        }
    }
    handleStarClick=(starId)=>{
        let tmpSearchStars = this.state.searchStars
        // disabling the stars behind the clicked star
        if(tmpSearchStars[starId]===true){
            for(let i=starId+1;i<=4;i++){
                tmpSearchStars[i]=false
            }
            this.setState({
                searchStars:tmpSearchStars
            })
            return false
        }
        //enabling-disabling the stars ahead of the clicked star
        for(let i=0;i<=starId;i++){
            tmpSearchStars[i]=!tmpSearchStars[starId]
        }
        
        this.setState({
            searchStars:tmpSearchStars
        })
    }
    handleMovieTitleChange=(e)=>{
        this.setState({
            searchInput:e.target.value
        })
    }
    
    render(){
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input type="text" className="search-box" placeholder="search for movies..." onChange={this.handleMovieTitleChange}/>
                    <button className="btn-primary btn-search" type="button" onClick={()=>this.props.handleSearch(this.state.searchInput,this.state.searchStars)}>Search</button>
                    <div className="rating">
                        <p className="min-rating">Minimum rating</p>
                        <ul className="search-star">
                            <li><a href="#" onClick={()=>this.handleStarClick(0)}><img className="star" src={Star} style={{opacity:this.state.searchStars[0]?1:.5}}/></a></li>
                            <li><a href="#" onClick={()=>this.handleStarClick(1)}><img className="star" src={Star} style={{opacity:this.state.searchStars[1]?1:.5}}/></a></li>
                            <li><a href="#" onClick={()=>this.handleStarClick(2)}><img className="star" src={Star} style={{opacity:this.state.searchStars[2]?1:.5}}/></a></li>
                            <li><a href="#" onClick={()=>this.handleStarClick(3)}><img className="star" src={Star} style={{opacity:this.state.searchStars[3]?1:.5}}/></a></li>
                            <li><a href="#" onClick={()=>this.handleStarClick(4)}><img className="star" src={Star} style={{opacity:this.state.searchStars[4]?1:.5}}/></a></li>
                        </ul>
                    </div>
                </form>
                </nav>
        </div>
    )
    }
}
