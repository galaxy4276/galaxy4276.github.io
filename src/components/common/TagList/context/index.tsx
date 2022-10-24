import { createContext, SetStateAction, Dispatch, useContext } from 'react';

interface ContextProps {
  tagList: string[];
  setTagState: Dispatch<SetStateAction<boolean[]>>;
}

const TagStateContext = createContext<ContextProps | null>(null);

export const useTagStateContext = () => {
  const data = useContext(TagStateContext);
  if (!data) throw new Error('[TagStateContext] tag 정보가 존재하지 않습니다.');
  return data;
};

export default TagStateContext;
