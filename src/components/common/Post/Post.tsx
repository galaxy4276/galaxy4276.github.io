import React from 'react';
import { navigate } from 'gatsby';
import { nanoid } from 'nanoid';
import Image from 'gatsby-image';

import { PostTag } from './PostTag';

type Props = {
  post: {
    title: string | null;
    description: string | null;
    tag: readonly (string | null)[] | null;
    date: string | null;
    preview: Queries.Maybe<Queries.File>;
    slug: string | null;
  }
};

export const Post: React.FC<Props> = ({ post }) => {
  const onClickToRedirectArticle = () =>
    navigate(`/contents/${post.slug}/`);

  const previewImgFluid = post.preview?.childImageSharp?.fluid as any;

  return (
    <article
      className="w-full cursor-pointer rounded-lg transition hover:bg-slate-100
        p-2 duration-300
      "
      onClick={onClickToRedirectArticle}
    >
      <section className="pb-3">
        <Image
          fluid={previewImgFluid}
          className="rounded-md drop-shadow-md"
        />
      </section>
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
        <section className="flex gap-x-1 flex-wrap">
          {
            post.tag
              ?.map(tagName =>
                <PostTag
                  key={nanoid()}
                  tagName={tagName as string}
                />
              )
          }
        </section>
      </section>
    </article>
  );
};
