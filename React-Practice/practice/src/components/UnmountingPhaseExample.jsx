


import React, { useEffect } from 'react'

const UnmountingPhaseExample = () => {

    useEffect(()=>{
        return ()=>{
            console.log('Unmounted ');
            
        }
    },[])
  return (
    <div>UnmountingPhaseExample</div>
  )
}

export default UnmountingPhaseExample