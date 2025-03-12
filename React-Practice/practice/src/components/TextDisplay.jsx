

import React, { useState } from 'react'

const TextDisplay = () => {

    const [text,setText] = useState("")
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} style={{padding:"10px",fontSize:"16px", border:"1px solid"}}/>
        <h1>{text}</h1>
    </div>
  )
}

export default TextDisplay