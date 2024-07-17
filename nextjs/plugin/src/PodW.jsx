import Script from "next/script"

export default function PodW({ apikey, debug }) {
  return (
    <>
      <Script
        src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js"
      />

      <voxgig-podmind-ask
        apikey={apikey}
        debug={debug}
      >
      </voxgig-podmind-ask>
    </>
  );
}
