import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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

const Header = props =>
  <header>
    <AppBarStyled position='sticky'>
      <Toolbar>
        <div>
          Logo
        </div>
        <Menu
          id="simple-menu"
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBarStyled>
    <LongDiv>Hey from longidv</LongDiv>
  </header>

export default Header