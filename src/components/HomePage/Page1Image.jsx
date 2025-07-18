import React from 'react'

const Page1Image = ({ src }) => {
  return (
    <div className='min-w-45'>
      <img
        src={src}
        alt="Dishesh"
        className='w-[144px] h-[180px] object-cover rounded-md shrink-0' />
    </div>
  )
}

export default Page1Image
