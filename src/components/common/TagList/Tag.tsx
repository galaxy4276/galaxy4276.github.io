import React, { useCallback, useState } from 'react';
import { useTagStateContext } from './context';

type Props = {
  tagName: string;
  tagIndex: number;
}

export const Tag: React.FC<Props> = ({ tagName, tagIndex  }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { setTagState } = useTagStateContext();

  const onClickTag = () => {
    setIsPressed(bool => !bool);
    setTagState(list => {
      if (!isPressed) {
        const clone = [...list];
        clone[tagIndex] = true;
        return clone;
      }
      const clone = [...list];
      clone[tagIndex] = false;
      return clone;
    });
  };

  return (
    <button
      type="button"
      className={`tag_button ${isPressed ? 'tag_button--pressed' : ''}`}
      onClick={onClickTag}
    >
      { tagName }
    </button>
  );
};
