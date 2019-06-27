import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from './../actions'
import UserHeader from './UserHeader';

const PostList= (props)=> {
    //destructuring because warning by eslint
    const {fetchPosts,postData} = props ;
    useEffect(() => {
        // props.fetchPosts();
        fetchPosts();
    },[fetchPosts]);
    console.log(props);
    const renderList=() =>{
      return postData.map(postItem=>{
        return (
          <div key={postItem.id}>
            <div>
              <h2>{postItem.title}</h2>
              <p>{postItem.body}</p>
            </div>
            <UserHeader userId={postItem.userId} />
          </div>
          
        );
      });
    }
    return (
      <div>{renderList()}</div>
    );
  }
  
const mapStateToProps=(state)=>{
  // console.log(state)
  return {
      //postData available in PostList as an object of props
      postData: state.posts
  }
}

export default connect(mapStateToProps,
  {fetchPosts:fetchPosts}
  )(PostList);