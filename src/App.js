import React from "react";
import { Button, Image, Divider, Header, Icon, Grid } from "semantic-ui-react";

import Comments from "./comments.js";
import Buttons from "./buttons.js"
import ham from "./ham.jpg";

function App() {
  return (
        <div style = {{backgroundColor : "black"}}>
      <Grid centered>
        <Grid.Row>
          <Image src={ham} centered />
        </Grid.Row>
        <Grid.Row>
<Buttons/>
        </Grid.Row>
      </Grid>

      <Divider horizontal>
        <Header as="h4" style = {{color : "white"}}>
          <Icon name="pencil alternate" style = {{color : "white"}} />
      댓글을 입력해주세요
        </Header>
      </Divider>

      <br />

      <br />
      <Comments />
      <Divider horizontal>
        <Header as="h4" style = {{color : "white"}}>
          <Icon name="envelope outline" style = {{color : "white"}} />
          Contact me
        </Header>
      </Divider>
      <div>
        <Grid centered>
          <Button circular color="instagram" icon="instagram" />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="youtube" icon="youtube" onClick = {()=>window.open(
            "https://www.youtube.com/channel/UC7ue1pZBUYiz_S3OKE7g_cQ/featured")}  />
          <Button circular color="google plus" icon="google plus" />
        </Grid>
      </div>
    </div>
  );
}

export default App;
