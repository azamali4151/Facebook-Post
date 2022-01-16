import React, { Component } from "react";
import Navbar from "./navbar-component";
import Posts from "./posts-component";

class Post extends React.Component {

    state = {
        posts:[
            { id:1,title:'Post Title 1',date:'09-Jan-2022',likeCheck:false,dislikeCheck:false },
            {id:2,title:'Post Title 2',date:'07-Jan-2022', likeCheck:false,dislikeCheck:false },
            {id:3,title:'Post Title 3',date:'08-Jan-2022',likeCheck:false,dislikeCheck:false },
            {id:4,title:'Post Title 4',date:'10-Jan-2022',likeCheck:false,dislikeCheck:false },
            {id:5,title:'Post Title 5',date:'05-Jan-2022',likeCheck:false,dislikeCheck:false }
        ],
        like:0,
        dislike:0

    }

    handleRemove = (postId) =>{
        const posts = [...this.state.posts];
        const updatePost = posts.filter((posts) => posts.id !== postId);
        this.setState({ posts: updatePost });
    }

    buttonStyle = {
        marginLeft:'90px'
    }

    addPost = () =>{
        console.log('add post');
        const addPost = {
            id:'6',
            title:'Title 6',
            date:'11-Jan-2022',
            likeCheck:false,
            dislikeCheck:false
        }
        
        

        this.setState({posts: [...this.state.posts,addPost ]});
    }

    handleLike = () =>{
        this.setState({ like: this.state.like + 1 })
    }

    handleDislike = () =>{
        this.setState({ dislike: this.state.dislike + 1 })
    }
    
    handleToggleClick = (id) =>{
        const posts = [...this.state.posts];
        const post =  posts.find(post => post.id === id)
        post.likeCheck = !(post.likeCheck)
        if(post.likeCheck? this.setState({like:this.state.like +1}):this.setState({like:this.state.like -1}))
       // this.setState({ like: this.state.like +1 })
        this.setState(posts);
    }

    handleToggleDislike = (id) =>{
        const posts = [...this.state.posts];
        const post =  posts.find(post => post.id === id)
        post.dislikeCheck = !(post.dislikeCheck)
        if(post.dislikeCheck? this.setState({dislike:this.state.dislike +1}):this.setState({dislike:this.state.dislike -1}))
        //this.setState({ dislike: this.state.dislike +1 })
        this.setState(posts);
    }

  render() {
      const { like ,dislike, likeCheck} = this.state;
    return (
        <>
        <Navbar like ={ like } dislike = { dislike }/>
        <button className="btn btn-primary" onClick={this.addPost} style={this.buttonStyle}>Add Post</button>
        {
            this.state.posts.map(value =>{
                return(
                    <Posts 
                    key={value.id}
                    id={value.id}
                    title={ value.title }
                    date = { value.date }
                    handleRemove = {this.handleRemove}
                    handleLike  = { this.handleLike }
                    handleToggleClick ={ this.handleToggleClick }
                    handleToggleDislike = {this.handleToggleDislike}
                    handleDislike = { this.handleDislike }
                    likeCheck= { value.likeCheck }
                    dislikeCheck = { value.dislikeCheck }
                    />
                )
            })
        }
              
        </>
    );
  }
}

export default Post;
