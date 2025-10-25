import React from 'react';

export function Card({name, title, bio}) {
  return (
    <>
      {/* <h1>Reuseable Profile Card Components</h1> */}
      <div className="card">
        <h2>{name}</h2>
        <p className="card-title">{title}</p>
        <p className="card-title">{bio}</p>
      </div>
    </>
  )
}