import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className="logo">SocialManish</span>
        </div>

        <div className="topbarCenter">
          <div className="searchbox">
            <SearchIcon className='searchicon'/>

            <input type="text" placeholder="Search for Profile" className="searchinput" />
          </div>
        </div>

        <div className="topbarRight">
          <div className="topbarLinks">

            <span className="topbarLink">HomePage</span>
            <span className="topbarLink">Timeline</span>

          </div>

          <div className="topbarIcons">
            <div className="topbariconItem">
              <PersonIcon />
              <span className="topbariconBadge">1</span>
            </div>

            <div className="topbariconItem">
              <MessageIcon />
              <span className="topbariconBadge">2</span>
            </div>

            <div className="topbariconItem">
              <NotificationsIcon />
              <span className="topbariconBadge">3</span>
            </div>
          </div>
          { /* <img src="public/assets/person1.png" alt="" />  this deosnt work */}
          <img src="/assets/person1.png" alt="" /> 
        </div>

    </div>
  )
}

export default Topbar