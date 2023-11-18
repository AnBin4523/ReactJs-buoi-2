import React from 'react'

export default function GlassesItem({glass, onSelect}) {
  const{id, url, name} = glass;
  return (
    <div className='glassesItem'>
      <img
        style={{cursor: "pointer"}}
        src={url}
        alt={name}
        onClick={() => onSelect(glass)}
      />
    </div>
  )
}

