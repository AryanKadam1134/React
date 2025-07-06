import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)

  const passwordRef = useRef(null);


  const changePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let generatedPassword = ""

    if(numberAllowed) {
      str += "0123456789"
    }

    if(symbolAllowed) {
      str += "`~!@#$%^&*()_+=-[]{}|;':,./<>?"
    }

    for(let i=1; i<=length; i++) {
      generatedPassword += str[Math.floor(Math.random() * str.length)]
    }
    setPassword(generatedPassword)
    console.log(password)
  }, [length, numberAllowed, symbolAllowed])

  useEffect(() => {changePassword()}, [length, numberAllowed, symbolAllowed])

  const copyPassword = useCallback(() => { 
    window.navigator.clipboard.writeText(password)
  }, [password])
  

  return (
    <>

    <div className='m-10 h-full w-full bg-gray-800 rounded-lg p-5'>

      <div>

        <input type="text" className='bg-white text-black p-2 m-l-t-b-2 rounded-l-lg' value={password}/>
        <button type="button" className='bg-blue-500 hover:bg-blue-600 text-black p-2 m-t-r-b-2 rounded-r-lg' ref={passwordRef} onClick={copyPassword()}>Copy</button>

      </div>

      <div className='text-white' >

        <input type="range" className='w-50 m-2' min={8} max={20} value={length} onChange={(e) => {setLength(e.target.value)}}/><label>Length({length})</label>
        <input type='checkbox' defaultChecked={numberAllowed} className='m-2' onChange={() => {setNumberAllowed(prev => !prev)}}/><label>Number</label>
        <input type='checkbox' defaultChecked={symbolAllowed} className='m-2' onChange={() => {setSymbolAllowed(prev => !prev)}}/><label>Symbol</label>

      </div>

    </div>
    
    </>
    
  )
}

export default App