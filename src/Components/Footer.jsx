import React, { useContext } from 'react'
import { DataContext } from '../Context/UserContext'

function Footer() {

    const dalo = useContext(DataContext)

    return (
        <div>
            <h1>this is footer: {dalo.email} </h1>
        </div>
    )
}

export default Footer
