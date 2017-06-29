import React, { Component } from 'react';
import axios from 'axios';
import { setAuthHeaders } from '../utils/auth';
import { Header, Button, Segment, Form } from 'semantic-ui-react';

class Bio extends Component {

  // Non Redux Way
  state = { bio: '', edit: false };

  componentDidMount() {
    axios.get('/api/bio')
      .then( res => {
        setAuthHeaders(res.headers);
        this.setState({ bio: res.data.body });
      })
      .catch( res => {
        console.log(`Bio GET Fail: ${res}`);
      });
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  displayBio = () => {
    return(
      <Segment textAlign='center'>
        <Header as='h4'>{this.state.bio}</Header>
        <Button primary onClick={this.toggleEdit}>Edit Bio</Button>
      </Segment>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/api/bio', { bio: { body: this.state.bio } })
      .then( res => {
        setAuthHeaders(res.headers);
        this.setState({ bio: res.data.body, edit: false });
      })
      .catch( res => {
        console.log(`Bio PUT Fail: ${res}`);
      });
  }

  handleChange = (e) => {
    this.setState({ bio: e.target.value });
  }

  editBio = () => {
    return(
      <Segment textAlign='center'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Editing Bio</label>
            <textarea
              value={this.state.bio}
              onChange={this.handleChange}
              placeholder='Your Bio Here!'
            />
          </Form.Field>
          <Button primary type='submit'>Submit</Button>
          <Button onClick={this.toggleEdit}>Cancel</Button>
        </Form>
      </Segment>
    )
  }

  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>My Bio</Header>
        { this.state.edit ? this.editBio() : this.displayBio() }
      </Segment>
    );
  }
}

export default Bio;
