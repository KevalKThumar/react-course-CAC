import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='w-full bg-gray-600 text-3xl text-white p-6 text-center font-bold font-serif'>User:{userid}</div>
  )
}

export default User