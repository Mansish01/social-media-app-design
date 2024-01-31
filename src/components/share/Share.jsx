import React from 'react'
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
    <div className='sharecontainer'>
        <div className="sharewrap">
            <div className="sharetop">
                <img src="/assets/manish.jpg" alt="manish.png" className='shareimg' />
                <input placeholder="What's in your mind, Manish?" className='shareinput'/>
            </div>

            <hr className='sharebreak'/>

            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <PermMediaIcon htmlColor='red' className='shareicon'/>
                        <span className='sharetext'>Photo/Video</span>
                    </div>

                    <div className="shareoption">
                        <LabelIcon htmlColor='blue' className='shareicon'/>
                        <span className='sharetext'>Tag</span>
                    </div>

                    <div className="shareoption">
                        <RoomIcon htmlColor='green' className='shareicon'/>
                        <span className='sharetext'>Location</span>
                    </div>

                    <div className="shareoption">
                        <EmojiEmotionsIcon htmlColor='goldenrod' className='shareicon'/>
                        <span className='sharetext'>Feelings</span>
                    </div>
                </div>

                <button className="sharebutton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share