const path = require('path');
module.exports = {
  siteMetadata: {
    author: 'Agastya Chandrakant',
    description: 'Discussions about the books I read.',
    email: 'acagastya@outlook.com',
    github: 'acagastya',
    goodreads: 'acagastya',
    instagram: 'acagastya',
    repo: 'book-reviews',
    siteName: 'Books पे बातें',
    siteUrl: 'https://acagastya.github.io/book-reviews/',
    title: 'Books पे बातें',
    twitter: '@acagastya',
    username: 'acagastya',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'book-discussion',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'reviews',
        path: path.join(__dirname, 'reviews'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Books पे बातें',
        short_name: 'Book reviews',
        start_url: '/',
        background_color: '#324996',
        theme_color: '#298BCC',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
