import React, { useContext } from 'react'
import { DataContext } from '../Context/UserContext'

function Header() {
    const name = useContext(DataContext);
    return (
        <div>
            <h1>thsi is header: {name.username} </h1>
        </div>
    )
}

export default Header
