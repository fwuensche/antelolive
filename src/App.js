import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Posts from "./components/Posts"
import Post from "./components/Post"
import Home from "./components/Home"
import Header from "./components/Header"
import { Pane } from "evergreen-ui"

const App = () => (
  <Router>
    <Pane width={500} margin="auto">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
      </Switch>
    </Pane>
  </Router>
)

export default App
