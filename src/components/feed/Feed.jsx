import React from 'react'
import "./feed.css"
import Share from '../share/Share';
import Post from '../post/Post';

const Feed = () => {
  return (
    <div className='feedbar'>
      <div className="feedwrap">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Feed;