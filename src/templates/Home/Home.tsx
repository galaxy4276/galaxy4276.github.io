import React from 'react';
import { DefaultTemplate } from '../DefaultTemplate';
import { PageProps } from 'gatsby';
import { PostList } from '../../components/PostList';
import { Introduce } from '../../components/common/Introduce';

type Props = {
  mdList: Queries.MarkdownRemark[];
}

export const Home: React.FC<Props> = ({ mdList }) => {
  return (
    <DefaultTemplate>
      <Introduce />
      <PostList mdList={mdList} />
    </DefaultTemplate>
  );
};
