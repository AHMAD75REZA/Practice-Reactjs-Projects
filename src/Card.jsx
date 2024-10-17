import React from 'react'

function Card({name, address, city, work, role, salary}) {
   console.log(name)

    return (
        <div className='flex justify-content center items-center inline'>

            <div className=' mr-5 m-10 py-5 px-5 border-2 solid red bg-black text-white'>
                <h1>card details</h1>
                <h2>Username : {name}</h2>
                <h2>City : {city}</h2>
                <h2>address : {address}</h2>
                <h2> work : {work}</h2>
                <h2>role : {role}</h2>
                <h2>salary : {salary}</h2>
                <button className='text-lightblue bg-black'>Add Friends</button>
            </div>
        </div>
    )
}

export default Card
