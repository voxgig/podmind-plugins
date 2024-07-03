import * as React from "react"
import PodW from '@voxgig/podw-gatsby'

const pageStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1>Test Podmind</h1>

      <PodW apikey="your-api-key" />
    </main >
  )
}

export default IndexPage
