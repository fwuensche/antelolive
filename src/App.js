import React from "react"
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
        <img
          src="https://avatars.githubusercontent.com/u/1740848?s=460&u=92755565c64e1972eebc04a505ccc98372d461b8&v=4"
          className="App-logo"
          alt="logo"
        />
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
