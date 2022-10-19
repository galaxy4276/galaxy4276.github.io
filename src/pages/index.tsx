import React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql, PageProps } from 'gatsby';

import { Home } from '../templates/Home';

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const mdxList = data.allMdx.nodes;
  return (
    <Home allMdx={mdxList as Queries.Mdx[]} />
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>SIVER.GI.LOG | HOME</title>

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    allMdx {
      nodes {
        frontmatter {
          title
          description
          tag
          date(formatString: "YYYY년 MM월 DD일")
        }
      }
    } 
  }
`;
