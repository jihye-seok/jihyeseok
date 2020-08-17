import React from "react";
import { Comment, Form, Button, Header, Icon } from "semantic-ui-react";


import human from "./human.png";

class Comments extends React.Component {
constructor(){
  super()
  this.state = {
    inputContent : ""
  }
}


  render() {
    return (
      <Comment.Group style={{ marginLeft: "600px" }}>
        <Header as="h3" dividing>
          Comments
        </Header>

        <Comment>
          <Comment.Avatar src={human} />
          <Comment.Content>
            <Comment.Author as="a">Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea
           value = {this.state.inputContent} placeholder = "댓글을 입력해주세요ㅎㅎ" onchange = {(e)=>this.setstate({inputContent : e.target.value})>
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary />
          </Form.TextArea>
        </Form>
        <br />
      </Comment.Group>
    );
  }
}
export default Comments;
