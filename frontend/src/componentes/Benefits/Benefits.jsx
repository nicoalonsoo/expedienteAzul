import React from 'react'

const Benefits = ({ imageUrl, text }) => {
    return (
      <div className="mx-auto text-center overflow-hidden">
        <img className="mx-auto mb-8" src={imageUrl} alt="Imagen" />
        <p className='mx-auto font-catamaran text-xl max-w-[220px] md:max-w-[300px]'>{text}</p>
      </div>
    );
}

export default Benefits
