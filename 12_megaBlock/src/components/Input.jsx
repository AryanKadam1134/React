import React from 'react'

const Input = React.forwardRef( function Input({type = "text", label, placeholder, className = "", ...props}, ref) {

    return (
        <div>
            {label && <label className={`inline-block mb-1 pl-1`}>{label}</label>}
            <input type={type} placeholder={placeholder} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} ref={ref} {...props} />
        </div>
    )
})
    
export default Input