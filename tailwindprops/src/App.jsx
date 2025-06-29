import Card from './components/card.jsx'
import './App.css'

function App() {

  

  return (
    <>
      <h1 className='bg-green-400 text-black p-2 rounded-2xl mb-2'>TailwindCSS</h1>
      <div className='flex flex-wrap justify-center gap-4'>
        <Card username = "Aryan" points = "10"/>
        <Card username = "Raj" points = "10"/>
        <Card username = "Vansh" points = "10"/> 
      </div>
      
    </>
  )
}

export default App
