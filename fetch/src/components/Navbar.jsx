import React from "react";

function Navbar() {
    
    return (

        <nav className="bg-white w-full h-20 flex items-center justify-between p-5 shadow-md">
            <div className="bg-white hover:bg-red-100 transition duration-1000 p-2 m-10 rounded-3xl">Home</div>
            <div className="bg-white hover:bg-red-100 transition duration-1000 p-2 m-10 rounded-3xl">About</div>
            <div className="bg-white hover:bg-red-100 transition duration-1000 p-2 m-10 rounded-3xl">Page 1</div>
            <div className="bg-white hover:bg-red-100 transition duration-1000 p-2 m-10 rounded-3xl">Page 2</div>
        </nav>
    )
}

export default Navbar;