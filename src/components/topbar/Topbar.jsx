import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

// import Profile from '../../pages/Profile/Profile';


const Topbar = () => {

  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className="logo" >SocialManish</span>
        </div>

        <div className="topbarCenter">
          <div className="searchbox">
            <SearchIcon className='searchicon'/>

            <input type="text" placeholder="Search for Profile" className="searchinput" />
          </div>
        </div>

        <div className="topbarRight">
          <div className="topbarLinks">

           <Link to="/" className='toplink'><span className="topbarLink">HomePage</span></Link> 
            <Link to="/login" className="toplink"> <span className="topbarLink">Login</span> </Link> 
            <Link to="/register" className="toplink"> <span className="topbarLink">Register</span> </Link> 


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
           <Link to="/profile"> <img src="/assets/manish.jpg" alt="" /> </Link>
        </div>

    </div>
  )
}

export default Topbar;