import React from 'react'

const OnlineFriend = ({person}) => {
  return (
    <li className="friend">
        <div className="friendinfocontainer">
            <img src={person.profilePicture} alt="" className="friendprofileimg" />
            <span className="friendonline"></span>
        </div>
        <span className='username'>{person.username}</span>
    </li>
              
  )
}

export default OnlineFriend;