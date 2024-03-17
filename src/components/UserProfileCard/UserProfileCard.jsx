import React from "react";
import "./UserProfileCard.css";
import profile_icon from '../Assets/Photo.jpg'

const UserProfileCard = () => {
  return (
    <div className="user-profile-card">
      <div className="gradient"></div>
      <div className="profile-down">
        <center><img src={profile_icon} alt=""/></center>
        <div className="profile-title">Mrinal Kumar Mishra</div>
        <div className="profile-description"><p>I am a Software Engineer well versed in React.js and JavaScript</p></div>
        <div className="profile-button"><a href="mailto:mrinalmishra302@gmail.com">Contact Me</a></div>
      </div>
    </div>
  );
};

export default UserProfileCard;
