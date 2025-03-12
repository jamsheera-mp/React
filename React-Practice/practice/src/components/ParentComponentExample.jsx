


import React from 'react'
import ChildComponentExample from './ChildComponentExample'

const ParentComponentExample = () => {
  return (
    <div>
        <ChildComponentExample name="abc"/>
        <ChildComponentExample name="xyz"/>
    </div>
  )
}

export default ParentComponentExample