

import React, {useState} from 'react'

const Toggle = () =>{
    const [show,setShow] = useState(true)
    return (
        <div>
           <p>{show ? "Hello Reacct" : "Good bye React"}</p>
           <button onClick={()=>setShow(!show)}>Toggle</button>
        </div>
    )
}

export default Toggle