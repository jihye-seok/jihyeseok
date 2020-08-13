import React from 'react';
import {Button, Input} from 'semantic-ui-react'

function Login(){

return(
  <div>
  <Input/>
  <Button Primary> 로그인! </Button>
  </div>

)
}


function App() {
  return (
    <div>
    <p> 안녕하세요</p>
    <button> 하이하이 </button>
    <Button> 하이하이 </Button>
    <Login / >
    </div>
  );
}

export default App;
