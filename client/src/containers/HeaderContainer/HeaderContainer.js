import React from 'react'
import Header from 'components/Header/Header'
import { connect } from 'react-redux'
import { setGoogleToken } from 'actions/tokenActions'

class HeaderContainer extends React.Component {

  onLogoutClick = () => {
    console.log('logout')
    this.props.setGoogleToken(null)
  }

  onProfileClick = () => {
    console.log('profile')
    console.log('does nothing yet')
  }

  render () {
    return (
      <Header 
        onLogoutClick={this.onLogoutClick}  
        onProfileClick={this.onProfileClick}
      />
    )
  }
}

export default connect(null, {setGoogleToken})(HeaderContainer)