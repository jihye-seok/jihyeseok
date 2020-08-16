import React from 'react';
import {Button, Image, Divider, Header, Icon, Grid} from 'semantic-ui-react'

import Comments from './comments.js'

import ham from"./ham.jpg"

function App() {
  return (
    <div>
    <Grid centered>
    <Grid.Row>
      <Image src = {ham} centered />
</Grid.Row>
<Grid.Row>
    <Button
      color='red'
      content='Like'
      icon='heart'
      label={{ basic: true, color: 'red', pointing: 'left', content: '0' }}
    />
    <Button
      basic
      color='blue'
      content='Share'
      icon='fork'
      label={{
        as: 'a',
        basic: true,
        color: 'blue',
        pointing: 'left',
        content: '0',
      }}
    />
    </Grid.Row>
  </Grid>
  <br/>
    <Divider horizontal>
  <Header as='h4'>
    <Icon name='envelope outline' />
    Contact me
  </Header>
</Divider>
<br/>
    <Comments />

    <div>
    <Grid centered>
<Button circular color='facebook' icon='facebook' />
<Button circular color='twitter' icon='twitter' />
<Button circular color='youtuve' icon='youtuve' />
<Button circular color='google plus' icon='google plus' />
</Grid>
</div>


    </div>
  );
}

export default App;
