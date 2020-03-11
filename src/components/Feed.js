import React, {Component} from "react";
import Post from "./Post"

export default class Feed extends Component {
    render(){
        const mappedPosts = this.props.posts.map(element => {
            return <div key={element.id} className="post-container">
                <Post post={element}/>
                <hr/>
            </div>
        })
        return(
            <div>This is Feed.js
                {mappedPosts}
            </div>
        )
    }
}