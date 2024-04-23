
import React from 'react';
import { useState } from 'react';

import { Button,StyleButton,StyledButton,Box } from './Style';


function App() {

  const [couter,setcouter]=useState(0);


  return (
    <div>
      <Box>
      <h2 style={{marginLeft:"150px"}}>Couter testing</h2>
      <h4 style={{marginLeft:"220px"}}>{couter}</h4>
      <div>
      <StyleButton onClick={()=>{setcouter(couter+1)}}>Increment</StyleButton>
      <StyledButton onClick={()=>{setcouter(couter-1)}}disabled={couter===0}>Decrement</StyledButton>
      
     
     <Button onClick={()=>{setcouter(0)}}>Reset</Button>
     </div>
     </Box>
    </div>
  );
}

export default App;
