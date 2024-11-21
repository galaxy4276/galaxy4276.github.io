import Flicking from "@egjs/react-flicking";
import { studyList } from "@/entities/study";
import { StudyItem } from "./ui/StudyItem";
import { AutoPlay } from "@egjs/flicking-plugins";

export const StudyCarousel = () => {
  const plugins = [new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: true })];

  return (
    <Flicking plugins={plugins} circular autoResize bound autoInit changeOnHold  useFindDOMNode adaptive>
      {studyList.map((study) => <StudyItem {...study} key={study.title} />)}
    </Flicking>
  );
};
