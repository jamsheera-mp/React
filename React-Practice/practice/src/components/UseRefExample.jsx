

import React, { useRef } from 'react'

const UseRefExample = () => {

    const inputRef = useRef(null)
    function focusInput(){
        inputRef.current.focus()
    }
  return (
    <div>
 <input ref={inputRef} />
 <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default UseRefExample