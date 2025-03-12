

import React from 'react'

const SendDatatoParent = ({sendData}) => {
  return (
    <div>
        <button onClick={()=>sendData("hello from child")}>Send Data to Parent</button>
    </div>
  )
}

export default SendDatatoParent