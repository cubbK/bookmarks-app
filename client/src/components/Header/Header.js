// @flow
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import styled from 'styled-components'
import { whiteColor } from 'theme/theme'

const LongDiv = styled.div`
  height: 2000px;
`

const AppBarStyled = styled(AppBar)`
`

const WhiteButton = styled(Button)`
  && {
    color: ${whiteColor}
  }
`

type Props = {
  onLogoutClick: () => void,
  onProfileClick: () => void
}

class Header extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state

    return (
      <header>
        <AppBarStyled position='sticky'>
          <Toolbar>
            <div>
              Logo
            </div>
            <WhiteButton
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              Open Menu
            </WhiteButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.props.onProfileClick}>Profile</MenuItem>
              <MenuItem onClick={this.props.onLogoutClick}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBarStyled>
        <LongDiv>Hey from longidv</LongDiv>
      </header>
    )
  }
}


export default Header