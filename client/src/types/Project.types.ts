import { User } from "./User.types";

export interface ProjectData {
  _id: number;
  title: string;
  developer: User;
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
  createdAt: any;
  updatedAt: any;
}

