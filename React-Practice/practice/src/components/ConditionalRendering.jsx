

import React from 'react'

const ConditionalRendering = (isLoggedIn) => {
  return (
    <div>
        <h1>{isLoggedIn ? "Welcome back" : "Please Login"}</h1>
    </div>
  )
}

export default ConditionalRendering