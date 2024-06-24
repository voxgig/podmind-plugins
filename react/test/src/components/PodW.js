import { useEffect } from 'react'

function PodW({ apikey, debug }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://podmind.voxgig.com/widget/voxgig-podmind-ask.js"
    return () => document.head.appendChild(script)
  }, [])

  return (
    <voxgig-podmind-ask
      apikey={apikey}
      debug={debug}
    >
    </voxgig-podmind-ask>
  )
}

export default PodW;
