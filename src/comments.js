import React from 'react';
import {Comment, Form, Button, Header, Icon} from 'semantic-ui-react'


import human from"./human.png"

class Comments extends React.Component {

  render(){
    return(<Comment.Group style = {{marginLeft :"600px" }}>
      <Header as='h3' dividing>
        Comments
      </Header>

      <Comment>
        <Comment.Avatar src={human} />
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>How artistic!</Comment.Text>
        </Comment.Content>
      </Comment>



      <Form reply>
        <Form.TextArea />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
      <br/>

        <div>
   <Button circular color='facebook' icon='facebook' />
   <Button circular color='twitter' icon='twitter' />
   <Button circular color='youtuve' icon='youtuve' />
   <Button circular color='google plus' icon='google plus' />
 </div>

    </Comment.Group>)
  }
}
export default Comments
