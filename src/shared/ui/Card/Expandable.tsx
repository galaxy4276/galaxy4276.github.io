import { DetailsHTMLAttributes, FC, ReactElement, useState } from "react";
import { Card } from "@/shared/ui";
import { join } from "@/shared/utils";
import { useStudyContext } from "@/features/study";

type Props = DetailsHTMLAttributes<HTMLDivElement> & {
  idle: ReactElement;
  extend: ReactElement;
};

let locking = false;

const lock = () => {
  locking = true;
};

const unLockLazy = () => setTimeout(() =>{
  locking = false;
}, 1200);

export const Expandable: FC<Props> = ({ idle, extend, className, ...props }) => {
  const [extendable, setExtendable] = useState(false);
  const { usingInteraction, setUsingInteraction } = useStudyContext();
  const otherUsingInteraction = !extendable && usingInteraction;

  const onMouseUp = () => {
    setExtendable(true);
    setUsingInteraction(true);
    lock();
    unLockLazy();
  };

  const onMouseLeave = () => {
    if (locking) return;
    setExtendable(false);
    setUsingInteraction(false);
  }

  return <Card
    className={
      join([
        "h-full p-0 shadow-none",
        "duration-300 transition-all ease-in",
        extendable ? "flex-1" : "w-fit",
        otherUsingInteraction && "w-[5px]",
        className,
      ])
    }
    {...props}
    onMouseUp={onMouseUp}
    onMouseLeave={onMouseLeave}
  >
    {extendable && extend}
    {!extendable && idle}
  </Card>
};
