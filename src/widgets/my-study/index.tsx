import { Card, Typo } from "@/shared/ui";
import { useState } from "react";
import { StudyContext } from "@/features/study";
import { StudyCarousel } from "@/features/study-carousel";
import Mouse from "@/assets/icon/mouse.svg";

export const MyStudy = () => {
  const [using, setUsing] = useState(false);

  return (<StudyContext.Provider value={{ usingInteraction: using, setUsingInteraction: setUsing }}>
    <Card
      id="my-study"
      className="w-full h-fit relative overflow-hidden flex flex-col md:flex-row gap-x-[16px] p-0"
    >
      <div className="flex-1 h-full md:flex-[0.96]">
        <StudyCarousel />
      </div>
      <div className="p-[16px] flex flex-col text-center hidden md:block">
        <Typo size={18} bold>지금 공부하고 있어요.</Typo>
        <Typo size={14} color="sub-title">마우스 또는 터치로 넘겨 확인해보세요.</Typo>
        <div className="flex w-full justify-center py-3">
          <div className="wipe">
            <Mouse/>
          </div>
        </div>

      </div>
    </Card>
  </StudyContext.Provider>)

};
