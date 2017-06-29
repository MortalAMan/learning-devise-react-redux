import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import { addLanguage } from '../actions/languages';

class Languages extends Component {
  state = { language: '' };

  handleSubmit = () => {
    // get the language value from  state
    // dispatch the addLanguage action
    this.props.dispatch(addLanguage(this.state.language));
  }

  handleChange = (e) => {
    // set component state of language to whatever the user is typing
    this.setState({ language: e.target.value });
  }

  render() {
    return(
      <Segment basic>
        <Header as='h2' textAlign='center'>My Languages</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Language</label>
            <input
              placeholder='New Language Name'
              value={this.state.language}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button primary type='submit'>Add Language</Button>
        </Form>
      </Segment>
    );
  }
}

export default connect()(Languages);
