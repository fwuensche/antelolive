import React from "react"
import { Link, useParams } from "react-router-dom"

const getPost = (id) =>
  fetch(`https://dev.to/api/articles/${id}`).then((res) => res.json())

const Post = () => {
  const { id } = useParams()

  const [post, setPost] = React.useState([])

  React.useEffect(() => {
    getPost(id).then((data) => setPost(data))
  }, [])

  return (
    <>
      <Link to="/">Back</Link>
      <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
    </>
  )
}

export default Post
