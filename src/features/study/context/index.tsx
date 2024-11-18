import React, { createContext } from "react";

type State = {
  usingInteraction: boolean;
  setUsingInteraction: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StudyContext = createContext<State | undefined>(undefined);
