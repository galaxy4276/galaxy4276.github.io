import React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql, PageProps } from 'gatsby';

import { Home } from '../templates/Home';

const IndexPage = ({ data }: PageProps<any>) => {
  const mdList = data.allMarkdownRemark.nodes;
  return (
    <Home mdList={mdList as Queries.MarkdownRemark[]} />
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>SILVER.GI.LOG | HOME</title>

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          title
          description
          tag
          date(formatString: "YYYY년 MM월 DD일")
          preview
          slug
        }
      }
    }
  }
`;
