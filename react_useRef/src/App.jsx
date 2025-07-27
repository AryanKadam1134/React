import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  // // Example of useRef to keep track of the number of times the component is rendered
  // const [value, setValue] = useState("");
  // const inputRef = useRef(0)

  // useEffect(() => {
  //   inputRef.current = inputRef.current + 1;
  // });

  // return (
  //   <>
  //     <input onChange={(e) => setValue(e.target.value)} type="text" value={value}/><br />
  //     <a>Your text is: {value}</a><br />
  //     <label >No. of times this element is rendered {inputRef.current}</label>
  //   </>
  // );





  // // Different Usecases of useRef
  // const [value, setvalue] = useState();
  // const inputRef = useRef();

  // function focusInput() {
  //   inputRef.current.focus();
  // }

  // return (
  //   <>
  //     <input
  //       ref={inputRef}
  //       type="text"
  //       id="input"
  //       onChange={(e) => setvalue(e.target.value)}
  //     />
  //     <label htmlFor="input">Your text is: {value}</label>
  //     <button onClick={focusInput}>Focus</button>
  //   </>
  // );


  // Another usecase
const [value, setValue] = useState("")
const prevValue = useRef("");

useEffect(() => {
  prevValue.current = value
}, [value])

  return (
    <>
    <input type="text" onChange={(e) => setValue(e.target.value)}/>
    <div>My current value : {value}</div>
    <div>My previous value : {prevValue.current}</div>
    </>

  )
}

export default App;
