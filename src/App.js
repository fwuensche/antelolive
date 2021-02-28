import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Posts from "./components/Posts"
import Post from "./components/Post"

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="/posts/:id">
            <Post />
          </Route>
        </Switch>
      </header>
    </div>
  </Router>
)

export default App
