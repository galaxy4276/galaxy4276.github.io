import React, { useCallback, useState } from 'react';
import { useTagStateContext } from './context';

type Props = {
  tagName: string;
  tagIndex: number;
}

export const Tag: React.FC<Props> = ({ tagName, tagIndex  }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { setTagState } = useTagStateContext();

  console.log(`${tagIndex} isPressed: ${isPressed}`);

  const onClickTag = () => {
    setIsPressed(bool => !bool);
    // setTagState(list => {
    //   if (isPressed) return [...list, tagIndex];
    //   const removeIndex = list.indexOf(tagIndex);
    //   console.log({ removeIndex });
    //   return list.filter(idx => idx != removeIndex);
    // });
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
