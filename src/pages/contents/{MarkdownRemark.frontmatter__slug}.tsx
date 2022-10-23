import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { DefaultTemplate } from '../../templates/DefaultTemplate';
import { PostStyleComp } from '../../components/common/Post';

const MarkdownRemarkFrontmatter__slug = ({ data, children }: PageProps<Queries.PostDetailQuery>) => {
  const html = data.markdownRemark?.html as string;
  return (
    <DefaultTemplate>
      <PostStyleComp>
        <div className="pb-3 flex flex-col">
          <h1>{data.markdownRemark?.frontmatter?.title}</h1>
          <p className="text-slate-500">
            {data.markdownRemark?.frontmatter?.date}
          </p>
          <hr/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        { children }
      </PostStyleComp>
    </DefaultTemplate>
  )
};

export default MarkdownRemarkFrontmatter__slug;

export const query = graphql`
  query PostDetail($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일") 
        slug
      }
    }
  }
`;
