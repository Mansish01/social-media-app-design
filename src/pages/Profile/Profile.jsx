import React from 'react'
import "./profile.css"

import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

const Profile = () => {
  return (
    <>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileright">
                <div className="profilerighttop">
                    <div className="profileimages">
                        <img src="/images/images_socialmedia/post10.png" alt="" className='profilecover'/>
                        <img src="/assets/manish.jpg" alt="" className='profilepicture' />

                    </div>

                    <div className="profileinfo">
                        <h4 className='profileusername'> Manish Gyawali</h4>
                        <span className="profiletext">Hello my friends!</span>
                    </div>
                   
                </div>
                <div className="profilerightbottom">
                    <Feed />
                    <Rightbar profile={true} />
                </div>
               
            </div>
          
        </div>

    </>
  )
}

export default Profile;