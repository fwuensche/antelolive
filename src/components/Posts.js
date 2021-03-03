import React from "react"
import { Link } from "react-router-dom"

const getPosts = () =>
  fetch("https://dev.to/api/articles?username=antelolive").then((res) =>
    res.json()
  )

const Posts = () => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    getPosts().then((data) => setPosts(data))
  }, [])

  return (
    <>
      <img
        src="https://avatars.githubusercontent.com/u/1740848?s=460&u=92755565c64e1972eebc04a505ccc98372d461b8&v=4"
        className="App-logo"
        alt="logo"
      />
      <p>Antelo Live</p>
      {posts.map((post) => (
        <div>
          <Link className="App-link" to={`posts/${post.id}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Posts
