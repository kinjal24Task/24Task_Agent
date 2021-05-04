import React, { Component } from "react"
import { withRouter } from "react-router-dom"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div>
          {this.props.children}
        </div>
      </>
    )
  }
}


export default withRouter(Index)
