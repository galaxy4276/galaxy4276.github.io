import GithubIcon from "@/assets/icon/github.svg"
import ObsidianIcon from "@/assets/icon/obsidian.svg"
import LinkedInIcon from "@/assets/icon/linkedin.svg"
import { FC, ReactElement } from "react";
import { Card } from "@/shared/ui";

type Type = "github" | "linkedin" | "obsidian";

const ComponentMap: Record<Type, ReactElement> = {
  github: <GithubIcon />,
  linkedin: <LinkedInIcon />,
  obsidian: <ObsidianIcon />,
};

type Props = {
  variant: Type;
  link: string;
}

export const LinkButton: FC<Props> = ({ variant, link }) => {
  const onClickLink = () => window.open(link, "_target");
  return (
    <Card className="flex justify-center items-center cursor-pointer transition duration-150 hover:bg-slate-100 cursor-pointer" onClick={onClickLink}>
      {ComponentMap[variant]}
    </Card>
  )
};