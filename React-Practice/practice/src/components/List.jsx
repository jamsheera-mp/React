import React from 'react'



const List = () => {
    const numbers = [1,2,3,4,5]
    const updateNums = numbers.map((number)=>{
        return <li> {number}</li>
    })
  return (
    <div>
 <ul>{updateNums}</ul>
        
    </div>
  )
}

export default List