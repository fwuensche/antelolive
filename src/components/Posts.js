import React from "react"
import { useHistory } from "react-router-dom"
import { Pane, Heading, Text } from "evergreen-ui"

const getPosts = () =>
  fetch("https://dev.to/api/articles?username=antelolive").then((res) =>
    res.json()
  )

const Posts = () => {
  const [posts, setPosts] = React.useState([])
  const history = useHistory()

  React.useEffect(() => {
    getPosts().then((data) => setPosts(data))
  }, [])

  return (
    <>
      <Heading size={800}>Posts</Heading>
      {posts.map((post) => (
        <Pane
          marginY={24}
          onClick={() => history.push(`/posts/${post.id}`)}
          cursor="pointer"
        >
          <Pane display="flex" marginBottom={6}>
            <Heading flex={1}>{post.title}</Heading>
            <Text>{post.positive_reactions_count} ♡</Text>
          </Pane>
          <Text>{post.description} likes</Text>
        </Pane>
      ))}
    </>
  )
}

export default Posts
