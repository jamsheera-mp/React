
import React, { useState } from 'react';

import MyButtonSample from './components/MyButtonSample';

function App() {
  const [count,setCount] = useState(0)
       function handleClick(){
          setCount(count+1)
      }
  return (
    <div>
<MyButtonSample count={count} onClick={handleClick}/>
<MyButtonSample count={count} onClick={handleClick} />
    </div>
  
 
  );
}

export default App;
