import React from "react"
import PropTypes from "prop-types"
import { Redirect, Route } from "react-router"

const AgentMiddleware = ({
  component: Component,
  layout: Layout,
  ...rest
}) => (
  <Route
    {...rest}
    exact
    render={props => {

      // First get localStorage data
      const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))

      // Check that user is login or not
      if (user) {

        // Check that particular route available for  for Agent or not
        if (localStorage.getItem("role") === 0) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          )
        }
        else if (localStorage.getItem("role") === 1 || parseInt(user.role) === 1) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        }
      } else {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    }}
  />
)

AgentMiddleware.propTypes = {
  component: PropTypes.any,
  layout: PropTypes.any,
  location: PropTypes.object,
}

export default AgentMiddleware
