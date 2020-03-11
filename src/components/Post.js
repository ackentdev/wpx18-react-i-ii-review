import React from 'react';

export default function Post(props){
    return(
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.body}</p>
        </div>
    )
}