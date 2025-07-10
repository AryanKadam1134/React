import React from 'react'

const useAPI = async () => {
    const response = await fetch('https://api.github.com/users/Aryankadam1134')
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return { data }
}

export default useAPI