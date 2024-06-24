import { useEffect } from 'react'

import './App.css';

function App() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://podmind.voxgig.com/widget/voxgig-podmind-ask.js"
    return () => document.head.appendChild(script)
  }, [])

  return (
    <>
      <h1>Podmind Test</h1>

      <voxgig-podmind-ask
        apikey="your-api-key"
        debug="true"
      >
      </voxgig-podmind-ask>
    </>
  )
}

export default App;
