import React, { createContext } from 'react'

export const DataContext = createContext(); //Data sab jagah pass krne k lye hai


function UserContext({children}) {
    // const username = "Ahmad"
    // console.log(props.children)

    const userData = {
        username: "Raaj",
        email: "raaj@gmail.com",
        age: 25,
        city:"Hyderbad"
    }
    return (
        <div>
            <DataContext.Provider value={userData}>

            
            {children}

            </DataContext.Provider>
            
        </div>
    )
}

export default UserContext
