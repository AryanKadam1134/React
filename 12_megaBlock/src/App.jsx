import React from 'react';

function App() {

  return (
    <>
      <div>React with appwrite</div>
      {console.log(import.meta.env.VITE_APPWRITE_URL)}
    </>
  )
}

export default App
