import React from 'react';
import ProfileCard from './ProfileCard';

export default function Avatar({ user }) {
  console.log(user);
  return (
    <>
      <ProfileCard />
      <div
        style={{
          alignItems: 'center',
          alignContent: 'center',
          display: 'inline-grid',
        }}
      >
        <div>{user.name}</div>
        <div>{user.designation}</div>
        <div>
          <div>
            <div>Address:{user.address}</div>
            <div>Email:{user.email}</div>
            <div>Mobile: {user.phone}</div>
            <div>Twitter:{user.twitter}</div>
            <div>Linked In:{user.linkedin}</div>
            <div>Github:{user.github}</div>
          </div>
        </div>
      </div>
    </>
  );
}
