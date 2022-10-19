import React, { PropsWithChildren } from 'react';

export const PostLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <section
    className="post_layout"
  >
    { children }
  </section>
);
