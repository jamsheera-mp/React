import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, email }) => {
  return (
    <div className="profile__card">
      <h1>{name}</h1>
      <p>Email:{email}</p>
    </div>
  );
};

export default ProfileCard;