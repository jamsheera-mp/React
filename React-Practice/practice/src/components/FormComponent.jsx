

import React, { useState } from 'react'

const FormComponent = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const handleNamechange = (e)=>setName(e.targrt.value)
    const handleEmailChange = (e) =>setEmail(e.targrt.value)
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('form submitted',{name,email});
        
    }
  return (
    <div>
<form onSubmit={handleSubmit}>
    <label htmlFor="">Name</label>
    <input type="text"  value={name} onChange={handleNamechange}/>

    <label htmlFor="">Email</label>
    <input type="text" value={email} onChange={handleEmailChange} />
    <button type='submit'>Submit</button>
</form>

    </div>
  )
}

export default FormComponent