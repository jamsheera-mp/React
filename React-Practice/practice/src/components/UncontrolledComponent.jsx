
import React, { useRef } from 'react';
 
function UncontrolledComponent() {
    const inputRef = useRef(null);
 
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('You typed: ' + inputRef.current.value);
    };
 
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    );
}
 
export default UncontrolledComponent;