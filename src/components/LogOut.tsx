import React from 'react'

const LogOut = () => {
    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/logout');
            
            if(response.ok) {
                console.log(response)
            }

            
        } catch(error) {
            console.log("Error: ", error)
        }
    }

  return (
    <div  className='text-gray-300 hover:bg-slate-600 px-2 py-1 rounded-md' onClick={handleSubmit}>Log Out</div>
  )
}

export default LogOut