import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import * as serviceWorker from "./serviceWorker"

// Connect our application with redux
import store from "./store"

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()
