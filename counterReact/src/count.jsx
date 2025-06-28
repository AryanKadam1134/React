import React from 'react';
import './App.css';

function Count() {
    let [counter, setCounter] = React.useState(0);

    const plusButton = document.getElementById("plus")
    const minusButton = document.getElementById("minus")

    plusButton.addEventListener("click", () => {
        setCounter(counter + 1);
    })

    minusButton.addEventListener("click", () => {
        setCounter(counter - 1);
    })
    return counter;

}

export default Count;