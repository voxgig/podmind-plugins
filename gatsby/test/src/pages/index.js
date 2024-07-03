import * as React from "react"
// import { Script } from "gatsby"
import PodW from '@voxgig/podw-gatsby'

const pageStyles = {
  color: "#232129",
  padding: "6rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
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
