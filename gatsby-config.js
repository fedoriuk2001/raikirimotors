const siteUrl = 'https://raikirimotors.com';

module.exports = {
  siteMetadata: {
    title: `raikirimotors`,
    siteUrl: siteUrl,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // importing here allows variables and mixins to be used in any scss file
        implementation: require("sass"),
        additionalData:
          '@import "src/assets/styles/variables";@import "src/assets/styles/mixins";',
      },
    },
    "gatsby-plugin-postcss",
  ],
};
