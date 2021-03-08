import React from "react"
import { Pane, Heading, Button } from "evergreen-ui"
import { useHistory } from "react-router-dom"

const Header = () => {
  const history = useHistory()

  return (
    <>
      <Pane display="flex" alignItems="center" marginY={24}>
        <Heading flex={1} cursor="pointer" onClick={() => history.push("/")}>
          Antelo Live
        </Heading>
        <Button appearance="minimal" onClick={() => history.push("/posts")}>
          Posts
        </Button>
      </Pane>
    </>
  )
}

export default Header
