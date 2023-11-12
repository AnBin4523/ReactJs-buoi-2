import React from 'react'

export default function GlassesItem() {
  return (
    <div className='card bg-light'>
        <img className='card-img-top' src="./img/g1.jpg" style={{maxWidth: "100%", height: 250}}/>
        <div className='card-body text-center'>
            <button className='btn btn-success'>Choose</button>
        </div>
    </div>
  )
}
