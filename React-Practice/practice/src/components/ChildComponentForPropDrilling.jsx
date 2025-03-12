

import React from 'react'
import GrandChildComponentForPropDrilling from './GrandChildComponentForPropDrilling'

const ChildComponentForPropDrilling = (props) => {
  return (
    <div>
 <GrandChildComponentForPropDrilling data={props.data}/>
    </div>
  )
}

export default ChildComponentForPropDrilling