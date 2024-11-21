import { FC } from "react";
import { Study } from "@/entities/study";
import { Typo } from "@/shared/ui";
import { join } from "@/shared/utils";

export const StudyItem: FC<Study> = ({ title, content, bgColor, Present, textWhite = true }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full h-full flex"
    >
      <div
        className="flex flex-col h-full p-[16px] pr-0 flex-1"
      >
        <div className="flex flex-col gap-y-1.5">
          <Typo size={24} className={join(["text-white underline underline-offset-8", !textWhite && "text-slate-900"])} bold>
            {title}
          </Typo>
          <Typo size={14} className={join(["text-white pt-3", !textWhite && "text-slate-900"])}>
            {content}
          </Typo>
        </div>
      </div>
      <div className="pr-[16px] pt-[16px]">
        {Present}
      </div>
    </div>
  );
};
