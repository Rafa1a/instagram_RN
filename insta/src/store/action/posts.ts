import { ADD_COMMENT, SET_POSTS,CREATING_POST,POST_CREATED } from "./actionTypes";
import axios from 'axios';


export const addPost = (post:any) => {
    
    return (dispatch:any) => {
        dispatch(creatingPost())
        axios({
            url:'uploadImage',
            baseURL:'https://us-central1-lambetest-66f98.cloudfunctions.net',
            method:'post',
            data: {
                image:post.image.base64
            }
        }).catch(err => console.log({error: err.code}))
            .then((resp:any) =>{

                console.log('resp.data',resp.data)

                // console.log('post imagem:',post.image)
                
                post.image = resp.data.imageUrl
                
                axios.post('/posts.json', {...post})
                .catch(err => console.log(err))
                .then((res:any)=>{
                    dispatch(fetchPosts())
                    dispatch(postCreated())
                })

            })
    }
    
    // return {
    //     type: ADD_POST,
    //     payload:post
    // }
}
export const addComment = (payload:any) => {

    return (dispatch:any) => {
        axios.get(`/posts/${payload.postID}.json`)
        .catch(err => console.log(err))
                .then((res:any)=>{
                    
                    const comments = res.data.comments || []
                    comments.push(payload.comment)
                    
                    axios.patch(`/posts/${payload.postID}.json`, {comments})
                    .catch(err => console.log(err))
                    .then(res=>{
                        dispatch(fetchPosts())
                    })
                })
    }

    // return {
    //     type: ADD_COMMENT,
    //     payload:payload
    // }
}

export const setPosts =  (posts:any) => {
    return { 
        type:SET_POSTS,
        payload:posts
    }

}

export const fetchPosts = () => {
    return (dispatch:any) => {
        axios.get('/posts.json')
        .catch(err => console.log(err))
        .then((res:any) => {
            const rawPosts = res.data
            const posts = []
            for (let key in rawPosts) {
                posts.push({
                    ...rawPosts[key],
                    id: key
                })
            }

            dispatch(setPosts(posts.reverse()))

        })
    }
}

export const creatingPost = () => {
    return {
        type:CREATING_POST
    }
}
export const  postCreated = () => {
    return {
        type:POST_CREATED
    } 

}