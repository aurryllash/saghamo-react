import React from 'react'
import { useAuth } from './AuthContext';


const LogOut = () => {
    const { logout } = useAuth();
    const handleSubmit = async () => {
        try {
            const response = await logout();
            
            console.log('response: ', response)
            
        } catch(error) {
            console.log("Error: ", error)
        }
    }

  return (
    <div  className='text-gray-300 hover:bg-slate-600 px-2 py-1 rounded-md' onClick={handleSubmit}>Log Out</div>
  )
}

export default LogOut