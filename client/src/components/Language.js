import React, { Component } from 'react';
import axios from 'axios';
import { Icon, IconGroup, List, ListHeader } from 'semantic-ui-react';
import { setFlash } from '../actions/flash';
import { connect } from 'react-redux';

class Language extends Component {
  // HINT: look at the BIO component for details on how to implement edit
  state = { language: '', edit: false };

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  handleChange = (e) => {
    this.setState({ language: e.target.value });  
  }

  displayLanguage = () => {
    return(
     
     <i class="edit icon">
        <Icon fitted name='write' size="large" />
        <Icon fitted name='trash' size="large" />
     </i>
       
      
    )
  }

  // edit display function - HINT BIO

  render() {
    return(
      <List.Item>
        <List.Content>
          <List.Header>{this.props.language.name}</List.Header>
          <Icon fitted name='write' size="large" />
          <Icon fitted name='trash' size="large" />
        </List.Content>
      </List.Item>
    )
  }
}

export default Language;
