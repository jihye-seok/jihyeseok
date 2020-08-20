import React from "react";
import firebase from "firebase"
import {
  Button,
  Image,
  Divider,
  Header,
  Icon,
  Grid,
  Input,
  Menu,
} from "semantic-ui-react";

import Comments from "./comments.js";
import Buttons from "./buttons.js";
import auth from "./fb.js";

import ham from "./ham.jpg";

var provider = new firebase.auth.GoogleAuthProvider();

class App extends React. Component {
  constructor(){
    super()
    this.state = {
      userName : "방문자"
    }
  }

  render () {
    return (
      <div style={{ backgroundColor: "black" }}>
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "15px" }}>
          {" "}
          Kimbutter{" "}
        </h1>
        <Menu inverted widths={3}>
          <Menu.Item> Menu </Menu.Item>
          <Menu.Item> {`반가워요,   ${this.state.userName}님.`} </Menu.Item>
          <Menu.Item
            onClick={() => {
              firebase
                .auth()
                .signInWithPopup(provider)
                .then(function (result) {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  var token = result.credential.accessToken;
                  // The signed-in user info.
                  var user = result.user;
              return user.displayName;

            })
            .then(result => this.setState ({userName : result}))
                .catch(function (error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // The email of the user's account used.
                  var email = error.email;
                  // The firebase.auth.AuthCredential type that was used.
                  var credential = error.credential;
                  // ...
                });
            }}
          >
            {" "}
            Login{" "}
          </Menu.Item>
        </Menu>
        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="paint brush" style={{ color: "white" }} />
            My Artwork
          </Header>
        </Divider>
        <Grid centered>
          <Grid.Row>
            <Image src={ham} centered />
          </Grid.Row>
          <Grid.Row>
            <Buttons />
          </Grid.Row>
        </Grid>

        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="pencil alternate" style={{ color: "white" }} />
            댓글을 입력해주세요
          </Header>
        </Divider>
        <Grid centered columns = {3}>
        <Grid.Column >
        <Comments userName = {this.state.userName}/> </Grid.Column></Grid>

        <br />

        <br />
        <Comments userName = {this.state.userName}/>
        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="envelope outline" style={{ color: "white" }} />
            Contact me
          </Header>
        </Divider>
        <div>
          <Grid centered>
            <Button circular color="instagram" icon="instagram" />
            <Button circular color="twitter" icon="twitter" />
            <Button
              circular
              color="youtube"
              icon="youtube"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UC7ue1pZBUYiz_S3OKE7g_cQ/featured"
                )
              }
            />
            <Button circular color="google plus" icon="google plus" />
          </Grid>
        </div>
      </div>
    );
  }

}
export default App;
