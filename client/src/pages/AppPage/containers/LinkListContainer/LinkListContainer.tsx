import * as React from 'react'


import { connect } from 'react-redux'

class LinkListContainer extends React.Component {
 

  render() {
    return (
      <div>LinkContainerList</div>
    )
  }
}

export default connect(
  state => ({
    googleToken: state.googleToken
  })
)(LinkListContainer)