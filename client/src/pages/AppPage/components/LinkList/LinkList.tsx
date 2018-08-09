import * as React from 'react'

const LinkList = props =>
  <div>
    {
      props.linkArr.map(link => <li key={link}>link</li>)
    }
  </div>

export default LinkList