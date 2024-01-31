import React from 'react'
import "./rightbar.css"

const Rightbar = () => {
  return (
    <div className='rightbar'>
        <div className="rightbarwrap">
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

            <li className="friend">

                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Sonu G.C.</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Kiran Neupane</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Kobid Upadhyay</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Grishma Khatiwada</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Jayanti Dahal</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Avash Gyawai</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Shreesti G.C.</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Khagendra Jora</span>
              </li>
          </ul>

          <hr className="linebreak" />
          <h4 className="rightbartitle">Group Conversations</h4>

          <ul className="friendlist">
              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Cricket Group</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Chitty Chitty Chat Chat</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>BCT A</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Mustang Tour</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Soprts Week Group</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Trekking Group</span>
              </li>

              <li className="friend">
                <div className="friendinfocontainer">
                  <img src="/assets/person3.jpg" alt="" className="friendprofileimg" />
                  <span className="friendonline"></span>
                </div>
                <span className='username'>Tour-2080</span>
              </li>

          </ul>
        </div>
    </div>
  )
}

export default Rightbar;