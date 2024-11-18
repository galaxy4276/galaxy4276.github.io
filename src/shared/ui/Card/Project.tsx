import { Badge, Card, Typo } from "@/shared/ui";
import { Project as ProjectType } from "@/entities";
import { FC } from "react";

type Props = {
  project: ProjectType;
};

export const Project: FC<Props> = ({ project }) => {
  const onClickOpenLink = () => window.open(project.link, "_target");

  return (
    <Card className="h-fit">
      <div className="w-full flex justify-center">
        <img src={project.bannerImageUrl} alt="banner.png"
             onClick={onClickOpenLink}
             className="overflow-hidden max-w-full max-h-[400px] cursor-pointer bg-no-repeat object-contain"/>
      </div>

      <div className="flex flex-col py-2 cursor-pointer" onClick={onClickOpenLink}>
        <Typo size={12} lang="en" className="text-slate-800">Project AT {project.at}</Typo>
        <Typo size={16} lang="ko" className="text-{#475569]" bold>{project.title}</Typo>
      </div>

      <div className="w-full flex-wrap flex gap-x-1 gap-y-1">
        {project.skills.map(badge => <Badge name={badge.name} key={badge.name} />)}
      </div>
    </Card>
  )
};
