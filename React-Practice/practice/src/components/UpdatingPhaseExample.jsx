

import React, { useEffect } from 'react'

const UpdatingPhaseExample = ({count}) => {
    useEffect(()=>{
        console.log('Component Updated');
        
    })
  return (
    <div>
 Count:{count}
    </div>
  )
}

export default UpdatingPhaseExample