import React, { useState } from 'react'

function FormHandling() {

const [username, setUsername]   = useState('')

    const submitHandler = (e) =>{
        // console.log("hello", e);
        e.preventDefault()
        // console.log("Form submitted");
        console.log(username)

       setUsername('');
        
    }

    return (
        <div>
            <form onSubmit={ (e)=>{
                submitHandler(e)
            } }>
                <input 
                value={username}
                onChange={(e)=> {
                    // console.log(e.target.value);
                    setUsername(e.target.value)
                }}
                className='px-4 py-3  rounded border text-xl m-5' 
                type="text" 
                placeholder='Enter your name'
                 />
                <button className='px-4 py-3 m-5 text-xl font-semibold bg-emerald-600 rounded border'>Submit</button>
            </form>
        </div>
    )
}

export default FormHandling
