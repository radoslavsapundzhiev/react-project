import React from 'react';
import Cars from '../Cars/Cars';
import './Profile.css';

export default function Profile() {
    return <div className="profile">
      <img src="" alt="profle" />
      <div className="personal-info">
        <p>
          <span>Username:</span>
          Pesho
        </p>
        <p>
          <span>Posts:</span>
          100000
        </p>
      </div>
    </div>;
  }