import Luffy from '../assets/luffy.png';
import Ka from '../assets/kakarot.png';
import Demon from '../assets/demon.png';
import Anime from '../assets/anime.png';

export interface ProjectData {
  id: number; // Ensure id is a number in your data
  name: string;
  dev: string;
  about: string;
  imageList: string[]; // Array of image URLs
  tags: string[];
  date: string;
  likes: string;
  dislikes: string;
}

export const dataSet: ProjectData[] = [
  {
    id: 1,
    name: "Project",
    dev: "SuperKnox",
    about:
      "Lorem ipsum dolor sit amet consectetur ad, atque ex! dolor sit amet consectetur ad, atque Ducimus.",
    imageList: [Luffy, Ka, Demon, Anime, Demon, Ka, Luffy, Demon, Anime], // Use imageList here
    tags: ["HTML", "CSS", "JavaScript", "Next.js", "Solid", "React", "Kotlin"],
    date: "23 Nov 2025",
    likes: "12",
    dislikes: "3",
  },
  {
    id: 2,
    name: "E-commerce Platform",
    dev: "TechSavvy",
    about:
      "Building a scalable e-commerce platform with modern technologies.",
    imageList: [Ka, Luffy, Demon], // Use imageList here
    tags: ["React", "Node.js", "Express", "MongoDB"],
    date: "15 Aug 2024",
    likes: "45",
    dislikes: "7",
  },
  {
    id: 3,
    name: "Social Media App",
    dev: "CodeMaster",
    about:
      "A social media application that connects people from around the world.",
    imageList: [Demon, Anime, Luffy], // Use imageList here
    tags: ["Flutter", "Dart", "Firebase"],
    date: "1 Jan 2023",
    likes: "88",
    dislikes: "10",
  },
  {
    id: 4,
    name: "Fitness Tracker",
    dev: "FitDev",
    about:
      "An app to track fitness activities and monitor health metrics.",
    imageList: [Luffy, Ka], // Use imageList here
    tags: ["Swift", "iOS", "HealthKit"],
    date: "10 Oct 2023",
    likes: "65",
    dislikes: "5",
  },
  {
    id: 5,
    name: "AI Chatbot",
    dev: "AI Guru",
    about:
      "Developing an AI-powered chatbot for customer support.",
    imageList: [Demon, Anime], // Use imageList here
    tags: ["Python", "TensorFlow", "NLP"],
    date: "5 Dec 2024",
    likes: "70",
    dislikes: "12",
  },
  {
    id: 6,
    name: "Travel Booking Website",
    dev: "GlobeTrotter",
    about:
      "A website for booking travel packages and exploring destinations.",
    imageList: [Ka, Anime], // Use imageList here
    tags: ["Angular", "TypeScript", "Node.js", "MySQL"],
    date: "20 Sep 2024",
    likes: "30",
    dislikes: "2",
  },
  {
    id: 7,
    name: "Music Streaming Service",
    dev: "MusicLover",
    about:
      "A platform for streaming and discovering new music.",
    imageList: [Luffy, Demon], // Use imageList here
    tags: ["Vue.js", "Java", "Spring Boot", "PostgreSQL"],
    date: "3 Mar 2023",
    likes: "110",
    dislikes: "8",
  },
  {
    id: 8,
    name: "Online Learning Portal",
    dev: "EduTech",
    about:
      "An online platform for learning new skills and courses.",
    imageList: [Anime, Ka], // Use imageList here
    tags: ["React", "Node.js", "Express", "MongoDB"],
    date: "12 Jun 2024",
    likes: "95",
    dislikes: "6",
  },
];

