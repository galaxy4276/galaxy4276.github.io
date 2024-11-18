export type ProjectSkill = {
  name: string;
};

export type Project = {
  bannerImageUrl: string;
  at: string;
  title: string;
  skills: ProjectSkill[];
  link: string;
};