import Luffy from '../assets/luffy.png';
import Ka from '../assets/kakarot.png';
import Demon from '../assets/demon.png';
import Anime from '../assets/anime.png';

export interface ProjectData {
  id: number;
  name: string;
  dev: string;
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

export const dataSet: ProjectData[] = [
  {
    id: 1,
    name: "Project One",
    dev: "SuperKnox",
    about: "This is a brief description about Project One. Build with react + nodejs for a rhobust backend . To view all anime ranking . Sample text description is being written here ",
    desc: "Detailed description about Project One. Lorem ipsum dolor sit amet consectetur ad, atque ex! dolor sit amet consectetur ad, atque Ducimus.",
    imageList: [Luffy, Ka, Demon, Anime, Demon, Ka, Luffy, Demon, Anime],
    tags: ["HTML", "CSS", "JavaScript", "Next.js", "Solid", "React", "Kotlin"],
    date: "23 Nov 2025",
    likes: "12",
    dislikes: "3",
    status: "In Development",
    releaseDate: "2024-07-30",
    techStack: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Next.js", "Solid", "React", "Kotlin"],
    thumbnail: Luffy
  },
  {
    id: 2,
    name: "E-commerce Platform",
    dev: "TechSavvy",
    about: "Building a scalable e-commerce platform with modern technologies.",
    desc: "A comprehensive e-commerce solution with advanced features. Lorem ipsum dolor sit amet consectetur ad, atque ex! dolor sit amet consectetur ad, atque Ducimus.",
    imageList: [Ka, Luffy, Demon],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    date: "15 Aug 2024",
    likes: "45",
    dislikes: "7",
    status: "In Testing",
    releaseDate: "2024-09-01",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    thumbnail: Ka
  },
  {
    id: 3,
    name: "Social Media App",
    dev: "CodeMaster",
    about: "A social media application that connects people from around the world.",
    desc: "An innovative social platform with unique features. Lorem ipsum dolor sit amet consectetur ad, atque ex! dolor sit amet consectetur ad, atque Ducimus.",
    imageList: [Demon, Anime, Luffy],
    tags: ["Flutter", "Dart", "Firebase"],
    date: "1 Jan 2023",
    likes: "88",
    dislikes: "10",
    status: "Live",
    releaseDate: "2023-01-15",
    techStack: ["Flutter", "Dart", "Firebase"],
    thumbnail: Demon
  },
  {
    id: 4,
    name: "Fitness Tracker",
    dev: "FitDev",
    about: "An app to track fitness activities and monitor health metrics.",
    desc: "A comprehensive fitness solution with integration to various health devices. Lorem ipsum dolor sit amet consectetur ad, atque ex! dolor sit amet consectetur ad, atque Ducimus.",
    imageList: [Luffy, Ka],
    tags: ["Swift", "iOS", "HealthKit"],
    date: "10 Oct 2023",
    likes: "65",
    dislikes: "5",
    status: "Beta",
    releaseDate: "2023-12-01",
    techStack: ["Swift", "iOS", "HealthKit"],
    thumbnail: Luffy
  },
  {
    id: 5,
    name: "AI Chatbot",
    dev: "AI Guru",
    about: "Developing an AI-powered chatbot for customer support.",
    desc: "An intelligent chatbot using advanced NLP techniques. Lorem ipsum dolor sit amet consectetur ad, atque ex! dolor sit amet consectetur ad, atque Ducimus.",
    imageList: [Demon, Anime],
    tags: ["Python", "TensorFlow", "NLP"],
    date: "5 Dec 2024",
    likes: "70",
    dislikes: "12",
    status: "In Development",
    releaseDate: "2025-03-15",
    techStack: ["Python", "TensorFlow", "NLP"],
    thumbnail: Demon
  },
  {
    id: 6,
    name: "Travel Booking Website",
    dev: "GlobeTrotter",
    about: "A website for booking travel packages and exploring destinations.",
    desc: "A user-friendly travel booking platform with extensive destination information. Lorem ipsum dolor sit amet consectetur ad, atque ex! dolor sit amet consectetur ad, atque Ducimus.",
    imageList: [Ka, Anime],
    tags: ["Angular", "TypeScript", "Node.js", "MySQL"],
    date: "20 Sep 2024",
    likes: "30",
    dislikes: "2",
    status: "In Testing",
    releaseDate: "2024-11-01",
    techStack: ["Angular", "TypeScript", "Node.js", "MySQL"],
    thumbnail: Ka
  },
  {
    id: 7,
    name: "Music Streaming Service",
    dev: "MusicLover",
    about: "A platform for streaming and discovering new music.",
    desc: "A feature-rich music streaming service with personalized recommendations. Lorem ipsum dolor sit amet consectetur ad, atque ex! dolor sit amet consectetur ad, atque Ducimus.",
    imageList: [Luffy, Demon],
    tags: ["Vue.js", "Java", "Spring Boot", "PostgreSQL"],
    date: "3 Mar 2023",
    likes: "110",
    dislikes: "8",
    status: "Live",
    releaseDate: "2023-04-01",
    techStack: ["Vue.js", "Java", "Spring Boot", "PostgreSQL"],
    thumbnail: Luffy
  },
  {
    id: 8,
    name: "Online Learning Portal",
    dev: "EduTech",
    about: "An online platform for learning new skills and courses.",
    desc: "A comprehensive e-learning platform with interactive courses and live sessions. Lorem ipsum dolor sit amet consectetur ad, atque ex! dolor sit amet consectetur ad, atque Ducimus.",
    imageList: [Anime, Ka],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    date: "12 Jun 2024",
    likes: "95",
    dislikes: "6",
    status: "Beta",
    releaseDate: "2024-08-15",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    thumbnail: Anime
  }
];
