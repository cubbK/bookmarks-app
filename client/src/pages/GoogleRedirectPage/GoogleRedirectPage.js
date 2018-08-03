import React from 'react'
import queryString from 'query-string'
import { API_URL } from 'globals.js'
import axios from 'axios'

class GoogleRedirectPage extends React.Component {
  componentDidMount() {
    const params = queryString.parse(window.location.search)
    console.log(params)
    const requestUrl = `${API_URL}googleUser/`
    axios.get(requestUrl, {
      headers: {
        code: params.code
      } 
    })

  }

  render () {
    return 5677
  }
}

export default GoogleRedirectPage