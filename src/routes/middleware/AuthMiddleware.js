import React from "react"
import { Route } from "react-router-dom"
import PropTypes from "prop-types"

const AuthMiddleware = ({
  component: Component,
  layout: Layout,
  ...rest
}) => (
  <Route
    {...rest}
    exact
    render={props => {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

AuthMiddleware.propTypes = {
  component: PropTypes.any,
  layout: PropTypes.any,
  location: PropTypes.object,
}

export default AuthMiddleware
