// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'shadoll',
  pathPrefix: process.env.NODE_ENV === 'github'
    ? '/sha/' // note the trailing slash
    : '/',
  outputDir: "public",
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'uk-ua',
          'en-gb',
          'ru-ru'
        ],
        pathAliases: { // path segment alias for each locales
          'uk-ua': 'ua',
          'en-gb': 'en',
          'ru-ru': 'ru'
        },
        fallbackLocale: 'en-gb', // fallback language
        defaultLocale: 'uk-ua', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
        }
      }
    }
  ]
}
