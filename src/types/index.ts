export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
}

export interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface IProject {
  id: number;
  title: string;
  isFeatured: boolean;  
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
  techStack: string[];
  description: string;
  hasProjectDetails: boolean
}
export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  className: string;
  projectDetail: IProject;
}
