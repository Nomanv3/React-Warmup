import React from 'react'
import '../App.css'

const Loading = () => {
  return (
    <div className='bg-red-200 w-full h-screen flex items-center justify-center'>
      <div class="loader">
    <span class="loader-text">loading</span>
      <span class="load"></span>
  </div>

    </div>
  )
}

export default Loading
