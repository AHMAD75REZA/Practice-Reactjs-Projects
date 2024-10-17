// Hooks are special type of functions
import React, { useState } from 'react'

function Profile() {
    
    const [user, setuser] = useState("Ahmad")
        
    const changeUser = () => {
        console.log("chal gya")
        setuser("Raaj")
    }
    return (
        <div>
            
            <h1>This is my profile username is {user}</h1>
            <button onClick={changeUser}>Change user</button>
        </div>
        
       
    )
}

export default Profile
