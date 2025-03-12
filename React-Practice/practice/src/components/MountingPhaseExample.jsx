

import React, { useEffect, useState } from 'react'

const MountingPhaseExample = () => {

    const [data,setData] = useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            setData('Fetched data')
        },1000)
    },[])
  return (
    <div>
{data ? data : 'Loading....'}
    </div>
  )
}

export default MountingPhaseExample