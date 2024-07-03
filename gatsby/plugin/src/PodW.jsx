import { Script } from "gatsby"

export default function PodW({ apikey, debug }) {
  return (
    <>
      <Script async src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js" />

      <voxgig-podmind-ask
        apikey={apikey}
        debug={debug}
      >
      </voxgig-podmind-ask>
    </>
  );
}
