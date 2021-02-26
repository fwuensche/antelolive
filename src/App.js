import React from "react"
import logo from "./logo.svg"
import "./App.css"

const getPosts = () =>
  fetch("https://dev.to/api/articles?username=fwuensche").then((res) =>
    res.json()
  )

function App() {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    getPosts().then((data) => setPosts(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Antelo Live</p>
        {posts.map((post) => (
          <a
            className="App-link"
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {post.title}
          </a>
        ))}
      </header>
    </div>
  )
}

export default App
