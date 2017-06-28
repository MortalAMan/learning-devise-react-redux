import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' />
          <Menu.Menu position='right'>
            <Menu.Item name='Register' />
            <Menu.Item name='Login' />
            <Menu.Item name='Logout' />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default NavBar;
