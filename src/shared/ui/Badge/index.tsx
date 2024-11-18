import { FC } from "react";
import { Typo } from "@/shared/ui";

type Props = {
  name: string;
}

export const Badge: FC<Props> = ({ name }) => (
  <div
    className="px-2 py-1 rounded-3xl"
    style={{
      backgroundColor: "rgba(190,196,213,0.5)",
    }}
  >
    <Typo size={12} className="text-slate-900" lang="en" bold>
      {name}
    </Typo>
  </div>
);
