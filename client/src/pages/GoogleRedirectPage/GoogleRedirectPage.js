import React from 'react'
import queryString from 'query-string'
import { API_URL } from 'globals.js'
import axios from 'axios'

class GoogleRedirectPage extends React.Component {
  componentDidMount() {
    const params = queryString.parse(window.location.search)
    console.log(params)
    axios.get(`${API_URL}googleUser/`, {
      headers: {
        code: params.code
      }
    })
  }

  render () {
    return 123
  }
}

export default GoogleRedirectPage