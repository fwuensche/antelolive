import React from "react"
import { Pane, Heading, Button, majorScale } from "evergreen-ui"
import { useHistory } from "react-router-dom"

const Header = () => {
  const history = useHistory()

  return (
    <>
      <Pane display="flex" alignItems="center" marginY={24}>
        <Heading cursor="pointer" onClick={() => history.push("/")} size={600}>
          Antelo Live
        </Heading>
        <Pane flex={1}></Pane>
        <Button
          appearance="minimal"
          onClick={() => history.push("/posts")}
          height={majorScale(5)}
        >
          Posts
        </Button>
      </Pane>
    </>
  )
}

export default Header
