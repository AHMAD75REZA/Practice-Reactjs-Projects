import { useState } from "react";

function MyApp(){
    const [num, setnum] = useState(0);


    return(
        <div>
            <h3>Number is {num}</h3>
            <button onClick={() => setnum(num+10)}>increament</button>
            <button onClick={()=>setnum(num-5)}>Decrement</button>
        </div>
    )
}
 export default MyApp;