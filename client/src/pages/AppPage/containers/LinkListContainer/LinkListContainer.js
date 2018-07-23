import React from 'react'
import axios from 'axios'
import { apiUrl } from 'globals.js'
import { connect } from 'react-redux'

class LinkListContainer extends React.Component {
  async componentDidMount() {
    try {
      const result = await axios.get(`${apiUrl}googleUser/`, {
        headers: {
          accessToken: this.props.googleToken
        }
      })
      console.log(result)
    } catch (err) {
      console.log(err.response)
    }
    
  }

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