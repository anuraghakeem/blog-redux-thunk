import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchPosts,fetchPostsAndUsers} from './../actions'
import UserHeader from './UserHeader';

const PostList= (props)=> {
    //destructuring because warning by eslint
    const {fetchPostsAndUsers,postData} = props ;
    useEffect(() => {
        // props.fetchPosts();
        fetchPostsAndUsers();
    },[fetchPostsAndUsers]);
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
  {fetchPostsAndUsers:fetchPostsAndUsers}
  )(PostList);