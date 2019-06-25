import React, { Component } from 'react'

import '../../css/home.scss'

class Home extends Component {

  state = {
    text: 'Hello world!'
  }
  render () {
    return (
      <h1 className="hello-world">{this.state.text}</h1>
    )
  }
}

export default Home
