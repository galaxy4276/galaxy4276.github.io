import { FC, ReactNode, DetailsHTMLAttributes } from "react";
import { join } from "@/shared/utils";

type Color = "title" |"sub-title" | "text";

type Props = {
  children: ReactNode;
  className?: string;
  bold?: boolean;
  color?: Color;
  size?: number;
  lang?: 'ko' | 'en'
} & DetailsHTMLAttributes<HTMLSpanElement>;

export const Typo: FC<Props> = ({ children, color, bold, className, size, lang = 'ko', ...props }) => {
  return <p
    className={
      join([
        className,
        bold && "font-bold",
        color && colorMap[color],
        lang === "ko" ? "font-pretendard" : "font-dm2Sans",
      ])
    }
    style={{
      fontSize: size,
    }}
    {...props}
  >
    {children}
  </p>;
};

const colorMap: Record<Color, string> = {
  title: "text-[#0F172A]",
  "sub-title": "text-[#64748B]",
  text: "text-[#475569]",
};
