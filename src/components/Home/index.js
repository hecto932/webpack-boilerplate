import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../../css/home.scss'

import * as homeActions from '../../actions/homeActions'

class Home extends Component {
  componentDidMount () {
    this.props.setText('ATI boilerplate')
  }

  render () {
    return (
      <h1 className="hello-world">{this.props.text}</h1>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.homeReducer
}

const mapDispatchToProps = {
  ...homeActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
