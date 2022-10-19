import React from 'react';
import { navigate } from 'gatsby';

type Props = {
  tagName: string;
};

export const PostTag: React.FC<Props> = ({ tagName }) => {
  return (
    <a className="text-sky-500 text-sm">
      #{ tagName }
    </a>
  );
};
