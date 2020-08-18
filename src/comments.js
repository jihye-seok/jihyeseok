import React from "react";
import { Comment, Form, Button, Header, Icon } from "semantic-ui-react";

import human from "./human.png";

function SingleComment (detail) {
  return (
     <Comment >
      <Comment.Content>
      <Comment.Avatar src={human} />

        <Comment.Author as="a" style = {{color : "white", marginLeft : "5px"}}> 방문자 </Comment.Author>
        <Comment.Metadata >
          <div style = {{color : "white"}}>2020년</div>
        </Comment.Metadata>
        <Comment.Text style = {{color : "white", marginLeft : "40px"}}>{detail.content}</Comment.Text>
      </Comment.Content>
    </Comment>)
}

class Comments extends React.Component {
constructor(){
  super();
  this.state = {
    inputContent : "",
    commentsList : []
  };
}

  render() {
    console.log(this.state.commentsList)
    return (
      <Comment.Group style={{ marginLeft: "600px" }}>
        <Header as="h3" dividing style = {{color : "white"}}>
          Comments
        </Header>

{this.state.commentsList.map(comments => <SingleComment content = {comments}/>)}


        <Form reply>
          <Form.TextArea
           value = {this.state.inputContent}
           placeholder = "댓글을 입력해주세요 ㅎㅎ"
           onChange={(e)=>this.setState({ inputContent : e.target.value})}
           />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick = {() => this.setState ((prevState)=> {return{
              commentsList : [...prevState.commentsList, this.state.inputContent],
          inputContent: ""
          }})}

            />

        </Form>
        <br />
      </Comment.Group>
    );
  }
}
export default Comments;
