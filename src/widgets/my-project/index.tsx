import { projectData, splitTwoSide } from "@/entities";
import { Card } from "@/shared/ui";

export const MyProject = () => {
  // const isTablet = layout === "tablet";

  const [leftSide, rightSide] = splitTwoSide(projectData);
  return (
    <div className="flex w-full flex-col md:grid grid-cols-2 default-gap">
      <div className="flex flex-col default-gap">
        {rightSide.map(project => <Card.Project project={project} key={project.title}/>)}
      </div>
      <div className="flex flex-col default-gap">
        {leftSide.map(project => <Card.Project project={project} key={project.title}/>)}
      </div>

      {/*{isTablet && (*/}
      {/*    {projectData.map(project => <Card.Project project={project} key={project.title}/>)}*/}
      {/*)}*/}

      {/*<div className="w-full flex default-gap flex-wrap md:grid grid-cols-2 md:grid-flow-dense">*/}
      {/*</div>*/}
    </div>
  );
};
