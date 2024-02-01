import React, { useState } from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';

const Post = ({post}) => {
    // console.log(post)
    const user = Users.filter((user) => user.id ===  post?.userId);
    console.log(user[0]);
    
    const [like , setLike ] = useState(post.like);
    const [isliked, setisLiked] = useState(false);

    // const [count, setCount] = useState(true);

    const likeHandler = () => {
        setLike(isliked ? like -1 : like + 1)
        setisLiked(!isliked);
        
        // if(count){
        //     setisLiked(true);
        //     setCount(false);
        // }
        // else{
        //     setisLiked(false);
        //     setCount(true);

        // }
        
        
    }

  return (
    <div className='postcontainer'>
        <div className="postwrap">
            <div className="posttop">
                <div className="posttopleft">
                    <img src={user[0].profilePicture} alt="" className='postprofile' />
                    <div className="postinfo">
                        <span className="postusername">{user[0].username}</span>
                        <span className="posttext">{post.date}</span>
                    </div>
                </div>
                <div className="posttopright">
                    <MoreVertIcon className='verticon'/>
                    
                </div>
            </div>

            <div className="postcenter">
                <span className="postcaption">{post?.desc}</span>
                <img src={post.photo} alt="" className='postedimg' />
            </div>

            <div className="postbottom">
                <div className="postbottomleft">
                    <img src="/assets/like.png" alt="" onClick={likeHandler} className='postlikeicon'/>
                    <img src="/assets/heart.png" alt="" onClick={likeHandler} className='postlikeicon'/>
                    <span className='likecount'>{like}</span>

                </div>

                <div className="postbottomright">
                    <span className="comments">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post;