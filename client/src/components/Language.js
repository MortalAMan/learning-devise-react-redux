import React, { Component } from 'react';
import { Icon, List } from 'semantic-ui-react';

class Language extends Component {
  // HINT: look at the BIO component for details on how to implement edit
  state = { edit: false };

  // toggleEdit function - like bio has again HINT

  // handleChange function

  // display function

  // edit display function - HINT BIO

  render() {
    return(
      <List.Item>
        <List.Content>
          <List.Header>{this.props.language.name}</List.Header>
          <Icon fitted name='write' />
          <Icon fitted name='trash' />
        </List.Content>
      </List.Item>
    )
  }
}

export default Language;
