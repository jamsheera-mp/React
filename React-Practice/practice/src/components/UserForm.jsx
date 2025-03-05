


import React, { useState } from 'react'

const UserForm = () => {
    const [name,setName] = useState("")
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name' />
        <p>Hello {name}</p>
    </div>
  )
}

export default UserForm