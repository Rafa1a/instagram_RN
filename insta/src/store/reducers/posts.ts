import { ADD_COMMENT, SET_POSTS,CREATING_POST,POST_CREATED } from "../action/actionTypes";

interface actions {
    type :string,
    payload:any
}
interface initialSstate {
    
}
const initialState:any = {
    posts: [],
    isUploading:false
}


 const reducer = (state = initialState, action:actions) => {
    switch (action.type) {
        case SET_POSTS :
            return {
                ...state,
                posts: action.payload
            }
        case ADD_COMMENT: {
            return{
                ...state,
                posts: state.posts.map((post:any) => {
                    if(post.id === action.payload.postID){
                        if(post.comments){
                            post.comments=post.comments.concat(
                                action.payload.comment
                            )
                        }else { 
                            post.comments=[action.payload.comment]
                        }
                    }
                    return post
                })
            }
        }
        case CREATING_POST : {
            return {
                ...state,
                isUploading:true,

            }
        }
        case POST_CREATED : {
            return {
                ...state,
                isUploading:false,
                
            }
        }
        default :
            return state
    }
}
export default reducer