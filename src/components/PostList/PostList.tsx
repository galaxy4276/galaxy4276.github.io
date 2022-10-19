import React, { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import { Post } from '../common/Post';
import createTagSetStore from './utils/create-tag-set-store';
import { TagList } from '../common/TagList';
import TagStateContext from '../common/TagList/context';
import { PostLayout } from '../../layouts';

const TagStateContextProvider = TagStateContext.Provider;
type Props = {
  allMdx: Queries.Mdx[];
};

export const PostList: React.FC<Props> = ({ allMdx }) => {
  const [filterTagList, setFilterTagList] = useState<number[]>([]);
  console.log({ filterTagList });

  const tagStore = useMemo(() => createTagSetStore(allMdx), []);
  const ctxProps = useMemo(() => ({
    tagList: tagStore,
    setTagState: setFilterTagList,
  }), []);

  // TODO: Filter 로직 필요
  const posts = useMemo(() => {
    return allMdx.map(({ frontmatter: { ...props }}) => ({ ...props }));
  }, [filterTagList]);

  return (
    <section>
      <section>
        <TagStateContextProvider value={ctxProps}>
          <TagList />
        </TagStateContextProvider>
      </section>
      <PostLayout>
        {
          posts.map(post => <Post key={nanoid()} post={post} />)
        }
      </PostLayout>
    </section>
  );
};
