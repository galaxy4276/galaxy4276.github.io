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
  const [filterTagList, setFilterTagList] = useState<boolean[]>(() => {
    return new Array(createTagSetStore(mdList).length).fill(false);
  });

  const tagStore = useMemo(() => createTagSetStore(mdList), []);
  const ctxProps = useMemo(() => ({
    tagList: tagStore,
    setTagState: setFilterTagList,
  }), []);

  const posts = useMemo(() => {
    const filterStringList = filterTagList
      .map((isFilter, index) => {
        if (isFilter) return tagStore[index];
      })
      .filter(d => d !== undefined);

    const posts = mdList.map(({ frontmatter: { ...props }}) => ({ ...props }));

    if (filterStringList.length == 0)
      return posts;
    return posts
      .filter(({ tag: tagList }) => {
        return tagList?.some(tag => filterStringList.includes(tag as string));
      });
  }, [filterTagList]);

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
