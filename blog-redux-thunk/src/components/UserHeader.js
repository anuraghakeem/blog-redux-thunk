import React, {useEffect} from 'react';
import { connect } from 'react-redux';
// import {fetchUser} from './../actions'

const UserHeader= (props)=> {
    //destructuring because warning by eslint
    // const {fetchUser, userId, usersData} = props ;
    // useEffect(() => {
    //     fetchUser(userId);
    // },[fetchUser,userId]);
    // console.log(usersData);
    const {user}= props;
    //defined it in mapStateToProps so it only loads the required user in the component
    // const user = usersData.find((user)=>{return user.id===userId});
    if(!user)
        return <div>Loading...</div>;
    return (
      <div>{user.name}</div>
    );
  }

const mapStateToProps=(state,ownProps)=>{
console.log(state)
return {
    //usersData available in PostList as an object of props
    user: state.users.find((user)=>{return user.id===ownProps.userId})
}
}

export default connect(mapStateToProps)(UserHeader);