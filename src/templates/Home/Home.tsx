import React from 'react';
import { DefaultTemplate } from '../DefaultTemplate';
import { PageProps } from 'gatsby';
import { PostList } from '../../components/PostList';

type Props = {
  mdList: Queries.MarkdownRemark[];
}

export const Home: React.FC<Props> = ({ mdList }) => {
  return (
    <DefaultTemplate>
      <PostList mdList={mdList} />
    </DefaultTemplate>
  );
};
