import jsonPlaceholder from '../apis/jsonPlaceholder'
//Used for memoization 
import _ from 'lodash'

//Action Creator
// export const fetchPosts=()=>{
    //Return an action
    // return {
        // type: 'FETCH_POSTS'
    // }
// }

export const fetchPostsAndUsers=()=>{
    return async (dispatch,getState)=>{
        await dispatch(fetchPosts());
        const userIds = _.uniq(_.map(getState().posts,'userId'))
        userIds.forEach(id => dispatch(fetchUser(id)));

        
    }
}

export const fetchPosts=()=>{
    return async (dispatch)=>{
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: "FETCH_POSTS", payload : response.data})
    }
}

export const fetchUser=(id)=>{
    return async (dispatch)=>{
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({type: "FETCH_USER", payload : response.data})
    }
}

// Using memoization to fetch users to solve overfetching HOWEVER it will not fetch if data is updated later
// export const fetchUser= id => dispatch => _fetchUser(id,dispatch)
// const _fetchUser= _.memoize(async (id,dispatch)=>{
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type: "FETCH_USER", payload : response.data})
// });
