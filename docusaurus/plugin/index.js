module.exports = function() {
  return {
    name: '@voxgig/podw-docusaurus',
    injectHtmlTags: function() {
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              async: true,
              src: 'https://podmind.voxgig.com/widget/voxgig-podmind-ask.js',
            },
          },
        ]
      }
    }
  };
};
