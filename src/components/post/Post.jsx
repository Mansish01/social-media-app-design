import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
  return (
    <div className='postcontainer'>
        <div className="postwrap">
            <div className="posttop">
                <div className="posttopleft">
                    <img src="/assets/manish.jpg" alt="" className='postprofile' />
                    <div className="postinfo">
                        <span className="postusername">Manish Gyawali</span>
                        <span className="posttext">5 minutes ago</span>
                    </div>
                </div>
                <div className="posttopright">
                    <MoreVertIcon className='verticon'/>
                    
                </div>
            </div>

            <div className="postcenter">
                <span className="postcaption">Hey! It's My First Post</span>
                <img src="/assets/26-fiord-getty.jpg" alt="" className='postedimg' />
            </div>

            <div className="postbottom">
                <div className="postbottomleft">
                    <img src="/assets/like.png" alt="" className='postlikeicon'/>
                    <img src="/assets/heart.png" alt="" className='postlikeicon'/>
                    <span className='likecount'>320</span>

                </div>

                <div className="postbottomright">
                    <span className="comments">98 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post;