import React from 'react';

function CounterButton({increment}) {
     /*DO NOT EDIT THIS LINE */ console.log("CounterButton rendered!"); //DO NOT edit this line 
     return <button onClick={increment}>Increment</button>

}

export default React.memo(CounterButton);
