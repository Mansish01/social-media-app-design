import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData';
import OnlineFriend from '../onlinePerson/OnlineFriend';
import GroupIcon from '@mui/icons-material/Group';

const Rightbar = ({profile}) => {

  const HomeRightbar = () =>{
    return (
      <>
        <div className="birthdaycontainer">
          <img src="assets/gift.png" alt="" className="birthdayimage" />
          <span className="birthdaytext">
            <b>Manish Gyawali</b> and <b>3 others</b> have birthday today
          </span>
        </div>

        <hr className="linebreak1" />

        <img src="/assets/ad.png" alt="" className="adimage" />
        <hr className="linebreak1" />

        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="friendlist">
            {Users.map((user) => (
            <OnlineFriend key={user.id} person={user} />))}
        </ul>
    </>
    )
  }

  const ProfileRightbar=() =>{
    return (
      <>
      <p className='rightbarinfotitle'> User Information</p> 
      <div className="rightbaruserinfo">

        <div className="rightbaritem">
          <span className="info">City:</span>
          <span className="value">Kathmandu</span>
        </div>

        <div className="rightbaritem">
          <span className="info">Study:</span>
          <span className="value">Bachelor</span>
        </div>

        <div className="rightbaritem">
          <span className="info">Phone:</span>
          <span className="value">xxxxxxxxxx</span>
        </div>

        <div className="rightbaritem">
          <span className="info">Relationship:</span>
          <span className="value">Single</span>
        </div>

      </div>

      <hr className="linebreak" />

      <div className="userfriends">
        <GroupIcon htmlColor='blue' className='groupicon'/>
        <span className="friendstitle">
          Friends
        </span>
        
      </div>

      <div className="followerlist">

        <div className="followerfriend">
          <img src="/images/person_socialmedia/person3.png" 
            alt="" className="followerfriendprofile" />

          <span className="folowerusername">Taylor Swift</span>
        </div>

        <div className="followerfriend">
          <img src="/images/person_socialmedia/person4.png" 
            alt="" className="followerfriendprofile" />

          <span className="folowerusername">Harry Styles</span>
        </div>

        <div className="followerfriend">
          <img src="/images/person_socialmedia/person5.png" 
            alt="" className="followerfriendprofile" />

          <span className="folowerusername">Mark Zuker</span>
        </div>

        <div className="followerfriend">
          <img src="/images/person_socialmedia/person6.png" 
            alt="" className="followerfriendprofile" />

          <span className="folowerusername">Jeff Bezos</span>
        </div>

        <div className="followerfriend">
          <img src="/images/person_socialmedia/person7.png" 
            alt="" className="followerfriendprofile" />

          <span className="folowerusername">Elon Musk</span>
        </div>

        <div className="followerfriend">
          <img src="/images/person_socialmedia/person8.png" 
            alt="" className="followerfriendprofile" />

          <span className="folowerusername">John Cena</span>
        </div>


      </div>
     
      </>
    )
  }


  return (
    <div className='rightbar'>
        <div className="rightbarwrap">
          {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}

export default Rightbar;