import React, { PureComponent } from 'react'
import UserContext from '../context/Usercontext'
import { useContext } from 'react'

function Login() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {setUser} = useContext(UserContext)

    const handleSumbit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (

        <div>
            <h2>Login Page</h2>

            <input 
                type="email" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder='Enter e-mail' 
            />

            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Enter Password'
            />
                
            <button onClick={handleSumbit}>Submit</button>
        </div>
    )
}

export default Login;