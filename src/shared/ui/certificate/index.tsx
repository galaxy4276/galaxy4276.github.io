import { FC } from "react";
import { Card, Typo } from "@/shared/ui";
import { join } from "@/shared/utils";

type BgType = "purple" | "green";

type Props = {
  name: string;
  issuer: string;
  colorType: BgType;
  textWhite?: boolean;
  link: string;
};

const ColorMap: Record<BgType, string> = {
  green: "green-bg.png",
  purple:"purple-bg.png",
}

export const Certificate: FC<Props> = ({ issuer, colorType, link, name, textWhite }) => {
  const onClickOpenDetailsPage = () => window.open(link, "_target");

  return <Card
    className="h-[120px] bg-no-repeat object-cover bg-cover overflow-hidden rounded-[21px] p-[20px] cursor-pointer"
    style={{
      backgroundImage: `url("/image/${ColorMap[colorType]}")`
    }}
    onClick={onClickOpenDetailsPage}
  >
    <div className="flex flex-col justify-end h-full leading-5">
      <Typo size={20} className={join([textWhite ? "text-white" : "text-slate-900"])} lang="en" bold>{name}</Typo>
      <Typo size={12} className={join([textWhite ? "text-white" : "text-slate-900"])} lang="ko">{issuer}</Typo>
      <div className={join(["w-full border", textWhite ? "border-white" : "border-slate-900"])}></div>
    </div>
  </Card>
};