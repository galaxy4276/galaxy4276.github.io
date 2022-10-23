import React, { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import { Post } from '../common/Post';
import createTagSetStore from './utils/create-tag-set-store';
import { TagList } from '../common/TagList';
import TagStateContext from '../common/TagList/context';
import { PostLayout } from '../../layouts';

const TagStateContextProvider = TagStateContext.Provider;
type Props = {
  mdList: Queries.MarkdownRemark[];
};

export const PostList: React.FC<Props> = ({ mdList }) => {
  const [filterTagList, setFilterTagList] = useState<number[]>([]);
  console.log({ filterTagList });

  const tagStore = useMemo(() => createTagSetStore(mdList), []);
  const ctxProps = useMemo(() => ({
    tagList: tagStore,
    setTagState: setFilterTagList,
  }), []);

  // TODO: Filter 로직 필요
  const posts = useMemo(() => {
    return mdList.map(({ frontmatter: { ...props }}) => ({ ...props }));
  }, [filterTagList]);
  console.log(posts);

  return (
    <section className="flex flex-col gap-y-5">
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
