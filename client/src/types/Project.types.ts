export interface ProjectData {
  _id: number;
  title: string;
  developer: string;
  about: string;
  desc: string;
  imageList: string[];
  tags: string[];
  date: string;
  likes: string;
  dislikes: string;
  status?: string;
  releaseDate?: string;
  techStack?: string[];
  thumbnail: string;
}

