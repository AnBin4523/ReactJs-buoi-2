import React from 'react'
import GlassesItem from './GlassesItem'

export default function GlassesList({glasses, onSelect}) {
  return (
    <div className='container'>
      <div className='row text-center'>
        {glasses.map((glass) => (
          <div className='col-2' key={glass.id}>
            <GlassesItem
              glass={glass}
              onSelect={onSelect}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
