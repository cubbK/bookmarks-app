import * as React from 'react'

const LinkList = props =>
  <div>
    {
      props.linkArr.map(link => <li>link</li>)
    }
  </div>

export default LinkList