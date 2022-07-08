import React from 'react';

export default function Avatar({ user }) {
  console.log(user);
  return (
    <>
      <div className="rounded_image">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          width={200}
          height={200}
        />
      </div>
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
