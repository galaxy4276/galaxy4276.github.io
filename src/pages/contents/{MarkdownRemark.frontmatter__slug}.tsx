import React, { useEffect, useRef } from 'react';
import { graphql, PageProps } from 'gatsby';

import { DefaultTemplate } from '../../templates/DefaultTemplate';
import { PostStyleComp } from '../../components/common/Post';

const MarkdownRemarkFrontmatter__slug = ({ data, children }: PageProps<Queries.PostDetailQuery>) => {
  const html = data.markdownRemark?.html as string;
  const commentEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = commentEl.current as HTMLDivElement;
    const element = document.createElement('script');
    element.async = true;
    element.src = 'https://utteranc.es/client.js';
    element.setAttribute('repo', 'galaxy4276/galaxy4276.github.io');
    element.setAttribute('issue-term', 'pathname');
    element.setAttribute('theme', 'github-light');
    element.setAttribute('crossorigin', 'anonymous');
    root.append(element);
  }, []);

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
      <div ref={commentEl}></div>
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
