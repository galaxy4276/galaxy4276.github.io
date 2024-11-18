import { FC, ReactElement, ReactNode, useState } from "react";
import { Card, CardProps } from "@/shared/ui";
import { join } from "@/shared/utils";

type Props = {
  elementHovered: ReactElement;
  children: ReactNode;
} & CardProps;

export const Hover: FC<Props> = ({ children, elementHovered, className, ...cardProps }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card  {...cardProps} className={join(["relative", className])} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {hovered && (
        <div className="absolute top-0 left-0 w-full h-full">
          {elementHovered}
        </div>
      )}
      {children}
    </Card>
  );
};
