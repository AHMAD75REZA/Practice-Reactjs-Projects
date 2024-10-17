import React from 'react'
import Example2 from './Example2'

// function Example(Props) {
//     return (
//         <div>
//             <h1>Mai hun Example1 {Props.name} </h1>
//         </div>
//     )
// }
const Example = (Props) =>{
    return(
        <>
        <div>
            <h1>Mai hun Example1 {Props.name} </h1>
            
        </div>
        <Example2 user = {Props.name} />
        
        </>
        
    )
}

export default Example
