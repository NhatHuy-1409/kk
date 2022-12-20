const languages = require("./src/data/languages")


module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `Hihi`,
    languages
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: languages.defaultLangKey,// tự động chuyển đến trang có langkeydefault.js
        useLangKeyLayout: false,
        prefixDefault: true,//giúp phát hiện file index theo langkeydefault
        langKeyForNull: 'any',
      }
    }
    `gatsby-plugin-meta-redirect`
  ],
}
