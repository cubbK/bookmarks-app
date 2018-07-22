// @flow
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import DotsIcon from '@material-ui/icons/MoreHoriz'

import styled from 'styled-components'
import { whiteColor } from 'theme/theme'

const LongDiv = styled.div`
  height: 2000px;
`

const AppBarStyled = styled(AppBar)`
`

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

const WhiteButton = styled(Button)`
  && {
    color: ${whiteColor};
  }
`

type Props = {
  onLogoutClick: () => void,
  onProfileClick: () => void
}

type State = {
  drawerOpen: boolean
}

class Header extends React.Component<Props, State> {
  state = {
    drawerOpen: false
  }

  toggleDrawer = (isOpen : boolean) => () => {
    this.setState({
      drawerOpen: isOpen
    })
  }

  render() {
    return (
      <header>
        <AppBarStyled position='sticky'>
          <ToolbarStyled>
            <div>
              Logo
            </div>
            <WhiteButton
              aria-haspopup="true"
              onClick={this.toggleDrawer(true)}
            >
              <DotsIcon />
            </WhiteButton>
            <SwipeableDrawer
              anchor="right"
              open={this.state.drawerOpen}
              onClose={this.toggleDrawer(false)}
              onOpen={this.toggleDrawer(true)}
            >
              123
            </SwipeableDrawer>
          </ToolbarStyled>
        </AppBarStyled>
        <LongDiv>Hey from longidv</LongDiv>
      </header>
    )
  }
}


export default Header