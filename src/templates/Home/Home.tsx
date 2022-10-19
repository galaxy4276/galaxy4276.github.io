import React from 'react';
import { DefaultTemplate } from '../DefaultTemplate';
import { PageProps } from 'gatsby';
import { PostList } from '../../components/PostList';

type Props = {
  allMdx: Queries.Mdx[];
}

export const Home: React.FC<Props> = ({ allMdx }) => {
  return (
    <DefaultTemplate>
      <PostList allMdx={allMdx} />
    </DefaultTemplate>
  );
};
