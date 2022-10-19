import React from 'react';

import { PostTag } from './PostTag';

type Props = {
  post: {
    title: string | null;
    description: string | null;
    tag: readonly (string | null)[] | null;
    date: string | null;
  }
};

export const Post: React.FC<Props> = ({ post }) => {

  return (
    <article
      className="w-full"
    >
      <section
        className="flex flex-col items-start"
      >
        <h3 className="font-semibold">
          {post.title}
        </h3>
        <span className="text-sm">
          {post.date}
        </span>
        <span className="text-slate-600 text-sm">
          {post.description}
        </span>
        {
          post.tag
            ?.map(tagName => <PostTag tagName={tagName as string} />)
        }
      </section>
    </article>
  );
};
