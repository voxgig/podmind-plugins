import React from 'react';

export default function PodW({ Head, apikey, debug }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js">
        </script>
      </Head>

      <voxgig-podmind-ask
        apikey={apikey}
        debug={debug ? "true" : "false"} >
      </voxgig-podmind-ask>
    </>
  );
}

