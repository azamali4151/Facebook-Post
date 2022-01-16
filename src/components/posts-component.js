import React, { Component } from 'react';
import image from '../image.jpg';
class Posts extends React.Component {
    divStyle = {
        width:'18rem',
        textAlign:'center'
    }
    state = {
      checkLike: true
    }
    
    render() { 
        const { id,title,date,handleRemove,handleLike,handleDislike,likeCheck,handleToggleClick,dislikeCheck,handleToggleDislike } = this.props
        
        return(
            <div className="card" style={this.divStyle}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{date}</p>
            <p><img src={image} style={{ width: "15rem" }} className="App-logo" alt="logo" /></p>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className='carg-body'>
            <input type='text' name='comment' placeholder='Comment'></input>
          </div>
          <div className="card-body">
            <a href="#" className="card-link">
            <i 
            className={ likeCheck ? "bi bi-hand-thumbs-up-fill" :"bi bi-hand-thumbs-up" }
           // onClick={ handleLike }
           onClick={() =>handleToggleClick(id)}
            ></i>
            </a>
            <a href="#" className="card-link">
            <i className={ dislikeCheck ?"bi bi-hand-thumbs-down-fill" :"bi bi-hand-thumbs-down"}
            //onClick={ handleDislike }
            onClick={() =>handleToggleDislike(id)}
            ></i>
            </a>
          </div>
          <button onClick={ () =>handleRemove(id) } className="btn btn-danger"><i class="bi bi-trash"></i></button>
        </div>
        );
    }
}
 
export default Posts;