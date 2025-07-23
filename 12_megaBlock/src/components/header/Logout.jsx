import React from 'react'
import {useDispatch} from 'react-redux'
import authService, { AuthService } from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function Logout() {

    const dispatch = useDispatch()

    const handleLogout = () => {
        authService.logout()
        .then(() => dispatch(logout()))
        .catch((error) => {
            console.error("Logout failed:", error);
            // Handle error appropriately, e.g., show a notification
        });
    }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout