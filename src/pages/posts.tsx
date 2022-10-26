import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { DefaultTemplate } from '../templates/DefaultTemplate';
import { PostList } from '../components/PostList';

const PostPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const mdList = data.allMarkdownRemark.nodes;

  return (
    <DefaultTemplate>
      <PostList mdList={mdList as Queries.MarkdownRemark[]} />
    </DefaultTemplate>
  )
};

export default PostPage;

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 9) {
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
