import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Silver Gi\'s DEVLOG',
    author: 'choi eun gi',
    siteUrl: `https://galaxy4276.github.io/`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@config': path.resolve(__dirname, 'src/config'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@templates': path.resolve(__dirname, 'src/templates'),
          '@pages': path.resolve(__dirname, 'src/pages'),
        },
        extensions: ['js', 'jsx', 'ts', 'tsx']
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/src/contents`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-static-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
          {
            resolve: 'gatsby-remark-classes',
            options: {
              classMap: {
                'heading[depth=1]': 'text-2xl',
                'heading[depth=2]': 'text-2xl',
                'heading[depth=3]': 'text-2xl',
              }
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
        ]
      }
    }
  ],
};

export default config;
