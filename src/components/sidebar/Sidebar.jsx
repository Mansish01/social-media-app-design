import React from 'react'
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarcontainer">
        <ul className="sidebaritems">
          <li className="sidebaritem">
            <RssFeedIcon className='sidebaricon'/>
            <span className="sidebaricontext">Feed</span>
          </li>

          <li className="sidebaritem">
            <ChatIcon className='sidebaricon'/>
            <span className="sidebaricontext">Chats</span>
          </li>

          <li className="sidebaritem">
            < PlayCircleFilledIcon className='sidebaricon'/>
            <span className="sidebaricontext">Videos</span>
          </li>

          <li className="sidebaritem">
            <GroupIcon className='sidebaricon'/>
            <span className="sidebaricontext">Groups</span>
          </li>

          <li className="sidebaritem">
            <BookmarkIcon className='sidebaricon'/>
            <span className="sidebaricontext">Bookmarks</span>
          </li>

          <li className="sidebaritem">
            <HelpOutlineIcon className='sidebaricon'/>
            <span className="sidebaricontext">Questions</span>
          </li>

          <li className="sidebaritem">
            <WorkIcon className='sidebaricon'/>
            <span className="sidebaricontext">Jobs</span>
          </li>

          <li className="sidebaritem">
            <EventIcon className='sidebaricon'/>
            <span className="sidebaricontext">Events</span>
          </li>

          <li className="sidebaritem">
            <SchoolIcon className='sidebaricon'/>
            <span className="sidebaricontext">Courses</span>
          </li>
        </ul>

        <button className='sidebarbutton'>Show More</button>
        <hr className='sidebarhr' />

        <h4 className="yourshortcut">Your Shortcuts</h4>

        <ul className="sidebarfriendlist">
          <li className="friendlistitem">
            <img src="/assets/person2.png" alt="" />
            <span>Candy Crush</span>
          </li>

          <li className="friendlistitem">
            <img src="/assets/person2.png" alt="" />
            <span>Hero Wars</span>
          </li>

          <li className="friendlistitem">
            <img src="/assets/person2.png" alt="" />
            <span>Teen Patti Gold</span>
          </li>

          <li className="friendlistitem">
            <img src="/assets/person2.png" alt="" />
            <span>Chess</span>
          </li>

          <li className="friendlistitem">
            <img src="/assets/person2.png" alt="" />
            <span>Pool Billards</span>
          </li>

          <li className="friendlistitem">
            <img src="/assets/person2.png" alt="" />
            <span>UN0!</span>
          </li>

          <li className="friendlistitem">
            <img src="/assets/person2.png" alt="" />
            <span>Subway Surfers</span>
          </li>

      
        </ul>

      </div>

    </div>
  )
}

export default Sidebar;