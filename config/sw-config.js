module.exports = {
  cache: {
    cacheId: "paceforgealpha",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "paceforgealpha",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
