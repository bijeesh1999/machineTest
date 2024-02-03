import React from 'react'
import "./Profile.css"
import Facebook from "../../assets/facebook.png"
import Instagram from "../../assets/instagram.png"
import Twitter from "../../assets/twitter.png"
import ProfilePic from "../../assets/media.png"

const Profile = () => {
  return (
    <div className='profile_div'>
        <div className='profile_pic'>
            <img src={ProfilePic} alt="" />
        </div>
        <div className='content'>
            <h4>John Doe</h4>
            <h5>CEO</h5>
            <div className='social_media'>
                <div>
                    <img src={Facebook} alt="" />
                </div>
                <div>
                    <img src={Instagram} alt="" />
                </div>
                <div>
                    <img src={Twitter} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile