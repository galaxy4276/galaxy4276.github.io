import { Card, Typo } from "@/shared/ui";
import React, { useState } from "react";
import { StudyContext } from "@/features/study";
import { StudyCarousel } from "@/features/study-carousel";
import Mouse from "@/assets/icon/mouse.svg";

const MyStudyComp = () => {
  const [using, setUsing] = useState(false);

  return (<StudyContext.Provider value={{ usingInteraction: using, setUsingInteraction: setUsing }}>
    <Card
      id="my-study"
      className="w-full h-fit relative overflow-hidden flex gap-x-[16px] p-0"
    >
      <div className="w-full h-full flex-1  md:flex-[0.95] overflow-hidden">
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

export const MyStudy = React.memo(MyStudyComp);