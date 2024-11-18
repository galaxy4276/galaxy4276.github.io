import { useContext } from "react";
import { StudyContext } from "../context";

export const useStudyContext = () => {
  const context = useContext(StudyContext);

  if (!context) {
    throw new Error("StudyContext is falsy");
  }

  return context;
};
