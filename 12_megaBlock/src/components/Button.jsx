import React from 'react'

function Button({text, bgcolor, className = "", type="button", textColor = "white", ...props}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgcolor} ${className} ${textColor}`} type={type} {...props}>{text}</button>
  )
}

export default Button