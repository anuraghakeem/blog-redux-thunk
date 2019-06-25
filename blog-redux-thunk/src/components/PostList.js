import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from './../actions'

const PostList= (props)=> {
    useEffect(() => {
        props.fetchPosts();
    });
    console.log(props)
    return (
      <div>Post List</div>
    );
  }
  
  export default connect(null,
    {fetchPosts:fetchPosts}
    )(PostList);