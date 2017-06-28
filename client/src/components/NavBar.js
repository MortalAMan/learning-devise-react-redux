import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/register'>
              <Menu.Item name='Register' />
            </Link>
            <Link to='/login'>
              <Menu.Item name='Login' />
            </Link>
            <Menu.Item name='Logout' />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default NavBar;
