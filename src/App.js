import React from 'react';
import {Button, Input} from 'semantic-ui-react'

function Login2(){

return(
  <div>
  <Input/>
  <Button onClick = {(e)=> {
console.log(e)
    alert(e.target.value)
  } }> 로그인! </Button>
  </div>

  )
}

class Login extends React.Component{
constructor(){
  super()
  this.state = {id:"아무것도 입력을 안했구만"}
}

  render(){
    return(
      <div>
      <Input onchange = { (e) => this.setstate({id : e.target.value }) }/>
      <Button value = {this.state.id} onClick = {(event)=> {
    console.log(event)
        alert(event.target.value)
      } } > Login </Button>
      </div>
    )
  }
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
