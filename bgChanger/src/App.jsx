import React, { useState } from 'react'
import Button from './components/Button';


function App() {
  const [color, setColor] = useState('gray');

  return (
    <div class="whole" className='h-screen w-screen' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bg-white bottom-12 inset-x-0 p-4 rounded-lg gap-4 shadow-lg'>
        {/* <button onClick={() => setColor("Red")} className='flex felx-wrap p-2 rounded-3xl' style={{backgroundColor : "Red"}}>Red</button>
        <button onClick={() => setColor("Blue")} className='flex felx-wrap p-2 rounded-3xl' style={{backgroundColor : "Blue"}}>Blue</button>
        <button onClick={() => setColor("Green")} className='flex felx-wrap p-2 rounded-3xl' style={{backgroundColor : "Green"}}>Green</button>
        <button onClick={() => setColor("Yellow")} className='flex felx-wrap p-2 rounded-3xl' style={{backgroundColor : "Yellow"}}>Yellow</button>
        <button onClick={() => setColor("Pink")} className='flex felx-wrap p-2 rounded-3xl' style={{backgroundColor : "Pink"}}>Pink</button> */}

        <Button change={() => setColor("Red")} color="Red" />
        <Button change={() => setColor("Blue")} color="Blue" />
        <Button change={() => setColor("Green")} color="Green" />
        <Button change={() => setColor("Yellow")} color="Yellow" />
        <Button change={() => setColor("Pink")} color="Pink" />
      </div>

    </div>
  )
}

export default App
