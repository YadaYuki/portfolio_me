module.exports = {
  transpileDependencies: [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      sass: {
        // Use modern Sass API to suppress deprecation warnings
        api: 'modern-compiler',
        sassOptions: {
          silenceDeprecations: [
            'legacy-js-api',
            'import',
            'slash-div',
            'global-builtin'
          ]
        }
      },
      scss: {
        api: 'modern-compiler',
        sassOptions: {
          silenceDeprecations: [
            'legacy-js-api',
            'import',
            'slash-div',
            'global-builtin'
          ]
        }
      }
    }
  }
}