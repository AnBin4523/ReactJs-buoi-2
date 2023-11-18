import React from 'react'

export default function FaceTest({glassTest}) {
  return (
    <div className='text-center'>
        <div className="faceImg">
        <img src="./img/model.jpg" alt="face" />
        {glassTest && (
          <>
            <div className="glassImg">
              <img src={glassTest.url} alt={glassTest.name} />
            </div>
            <div className="glassInfo">
              <h5>
                {glassTest.name} - {glassTest.price}$
              </h5>
            </div>
          </>
        )}
        </div>
    </div>
  )
}
