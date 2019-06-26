import jsonPlaceholder from '../apis/jsonPlaceholder'

//Action Creator
// export const fetchPosts=()=>{
    //Return an action
    // return {
        // type: 'FETCH_POSTS'
    // }
// }

export const fetchPosts=()=>{
    return async (dispatch)=>{
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: "FETCH_POSTS", payload : response.data})
    }
}
