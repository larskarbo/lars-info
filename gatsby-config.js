require("dotenv").config()
const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Fileparty",
  },
  plugins: [
    // `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/src/content`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `scr`),
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {

            baseId: `appugmBtHoY7HdY6e`,
            tableName: `larses`,
            mapping: { img: `fileNode` },
            // tableView: `YOUR_TABLE_VIEW_NAME` // optional
            // can leave off queryName, mapping or tableLinks if not needed
          }
        ]
      }
    }
    ,
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-180174227-1",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://larslist.org`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LarsList`,
        short_name: `LarsList`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/square_logo.svg`
      },
    },
  ],
};
