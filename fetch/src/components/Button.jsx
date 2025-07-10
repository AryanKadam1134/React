import React from "react";

function Button({change}) { 

    
     
    return (
        <button onClick={change} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700">
            Generate Info
        </button>
     )
}

export default Button;