

import React from 'react'

const MyButtonSample = ({count,onClick}) => {
    
  return (
    <div>
        <button onClick={onClick}>Clicked {count} times</button>
    </div>
  )
}

export default MyButtonSample