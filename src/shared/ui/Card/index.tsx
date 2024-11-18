import { DetailsHTMLAttributes } from "react";
import { join } from "@/shared/utils";
import { Expandable } from "./Expandable";
import { Project } from "./Project";
import { Hover } from "./Hover";

export type CardProps = DetailsHTMLAttributes<HTMLDivElement>;

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <article className={join(["rounded-[18px] bg-white p-[13px] shadow", className])} {...props}>
      {children}
    </article>
  );
};

Card.Extendable = Expandable;
Card.Project = Project;
Card.Hover = Hover;
