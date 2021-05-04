import React, { Component } from "react"
import { BrowserRouter, Switch } from "react-router-dom"

// Import Routes
import { agentRoutes,authRoutes } from "./routes/"

// Middleware import
import AuthMiddleware from "./routes/middleware/AuthMiddleware"
import AgentMiddleware from "./routes/middleware/AgentMiddleware"

// All layouts imported
import AgentLayout from "./components/AgentLayout/"
import AuthLayout from "./components/AuthLayout/"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>

          {/* Agent routes */}
          {agentRoutes.map((route, idx) => (
            <AgentMiddleware
              path={route.path}
              layout={AgentLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
            />
          ))}

            {/* auth routes */}
            {authRoutes.map((route, idx) => (
            <AuthMiddleware
              path={route.path}
              layout={AuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
