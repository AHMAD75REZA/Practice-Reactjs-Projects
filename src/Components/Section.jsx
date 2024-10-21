import React, { useContext } from 'react'
import { DataContext } from '../Context/UserContext'

function Section() {
    const sect = useContext(DataContext);
    return (
        <div>
            <h1>this is Section:  {sect.age} </h1>
        </div>
    )
}

export default Section
