import React from 'react'
import Navbar from './components/navbar'
import Card from './components/Card'

// import { useCallback } from 'react'

function App() {
  
  
  return (
    <>
    <Navbar />
      <div className='bg-black h-screen w-screen flex items-center justify-center p-20'>
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
