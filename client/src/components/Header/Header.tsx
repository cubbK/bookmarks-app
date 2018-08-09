import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'

import DrawerList from './components/DrawerList/DrawerList'

import styled from 'styled-components'
import { whiteColor } from 'theme/theme'

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

interface IProps {
  onLogoutClick: () => void,
  onProfileClick: () => void
}

interface IState {
  drawerOpen: boolean
}

class Header extends React.Component<IProps, IState> {
  public state = {
    drawerOpen: false
  }

  public render() {
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
              <MenuIcon />
            </WhiteButton>
            <SwipeableDrawer
              anchor="right"
              open={this.state.drawerOpen}
              onClose={this.toggleDrawer(false)}
              onOpen={this.toggleDrawer(true)}
            >
              <DrawerList 
                onLogoutClick={this.props.onLogoutClick}
                onProfileClick={this.props.onProfileClick}
              />
            </SwipeableDrawer>
          </ToolbarStyled>
        </AppBarStyled>
      </header>
    )
  }

  private toggleDrawer = (isOpen : boolean) => () => {
    this.setState({
      drawerOpen: isOpen
    })
  }
}


export default Header