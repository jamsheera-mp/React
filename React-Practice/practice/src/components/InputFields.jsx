


import React from 'react'
import { useRef } from 'react'

const InputFields = () => {

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)

     
   
  return (
    <div>

        <input type="text"  ref={inputRef1} value={inputRef1.current.value} placeholder='Enter something' style={{border:"1px solid"}}/>
        <input type="text"  ref={inputRef2} value={inputRef2.current.value} placeholder='enter something' style={{border:"1px solid"}}/>
        <p>{inputRef1===inputRef2 ?"matching":"not matching"}</p>
    </div>
  )
}

export default InputFields