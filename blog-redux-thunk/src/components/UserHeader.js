import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchUser} from './../actions'

const UserHeader= (props)=> {
    //destructuring because warning by eslint
    const {fetchUser, userId, usersData} = props ;
    useEffect(() => {
        fetchUser(userId);
    },[fetchUser,userId]);
    console.log(usersData);
    const user = usersData.find((user)=>{return user.id===userId});
    if(!user)
        return <div>Loading...</div>;
    return (
      <div>{user.name}</div>
    );
  }

const mapStateToProps=(state)=>{
console.log(state)
return {
    //usersData available in PostList as an object of props
    usersData: state.users
}
}

export default connect(mapStateToProps,
    {fetchUser:fetchUser}
    )(UserHeader);