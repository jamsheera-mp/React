

import React from 'react'
import ChildComponentForPropDrilling from './ChildComponentForPropDrilling'

const ParentComponentForPropDrilling = () => {
    const data = "Hello from Parent"
  return (
    <div>
        <ChildComponentForPropDrilling  data={data}/>
    </div>
  )
}

export default ParentComponentForPropDrilling