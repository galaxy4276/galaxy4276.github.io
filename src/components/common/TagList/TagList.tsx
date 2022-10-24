import React, { memo } from 'react';
import { nanoid } from 'nanoid';

import { Tag } from './Tag';
import { useTagStateContext } from './context';

export const TagList: React.FC = memo(() => {
  const { tagList } = useTagStateContext();
  return (
    <nav
      className="tag_layout"
    >
      {
        tagList.map((tagName, tagIndex) => (
          <Tag
            tagName={tagName}
            tagIndex={tagIndex}
            key={nanoid()}
          />
        ))
      }
    </nav>
  );
});
