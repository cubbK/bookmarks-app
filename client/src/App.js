// @flow
import React, { Component } from 'react'
import { Provider, Heading, Button } from 'rebass'
import { injectGlobal } from 'styled-components'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

class App extends Component {
  render() {
    return (
      <Provider>
        <div>yo</div>
        <Heading>Hello</Heading>
        <Button>Rebass</Button>
      </Provider>
    )
  }
}

export default App
