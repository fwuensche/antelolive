import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { BackButton, Heading } from "evergreen-ui"
import "./Post.css"

const getPost = (id) =>
  fetch(`https://dev.to/api/articles/${id}`).then((res) => res.json())

const Post = () => {
  const { id } = useParams()
  const history = useHistory()
  const [post, setPost] = React.useState([])

  React.useEffect(() => {
    getPost(id).then((data) => setPost(data))
  }, [])

  return (
    <>
      <BackButton onClick={() => history.push("/posts")} />
      <Heading marginTop={24} size={800}>
        {post.title}
      </Heading>
      <div className="container">
        <div className="body">
          <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
        </div>
      </div>
    </>
  )
}

export default Post
