import * as React from "react"
import { Script } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "6rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const widget = {
  marginTop: "2rem",
  maxWidth: "45rem",
  width: "100%"
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1>Test Podmind</h1>

      <Script async src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js" />
      <div style={widget}>
        <voxgig-podmind-ask
          apikey="your-api-key"
        >
        </voxgig-podmind-ask>
      </div>
    </main >
  )
}

export default IndexPage
