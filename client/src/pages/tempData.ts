import Luffy from '../assets/luffy.png';
import Ka from '../assets/kakarot.png';
import Demon from '../assets/demon.png';
import Anime from '../assets/anime.png';

export interface ProjectData {
  name: string;
  dev: string;
  about: string;
  image: string;
  tags: string[];
  date: string;
  likes: string;
  dislikes: string;
}

const images = [Luffy, Ka, Demon, Anime];

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

export const dataSet: ProjectData[] = [
  {
    name: "Project",
    dev: "SuperKnox",
    about:
      "Lorem ipsum dolor sit amet consectetur ad, atque ex! dolor sit amet consectetur ad, atque Ducimus.",
    image: Luffy,
    tags: ["HTML", "CSS", "JavaScript", "Next.js", "Solid", "React", "Kotlin"],
    date: "23 Nov 2025",
    likes: "12",
    dislikes: "3",
  },
  {
    name: "E-commerce Platform",
    dev: "TechSavvy",
    about:
      "Building a scalable e-commerce platform with modern technologies.",
    image: Ka,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    date: "15 Aug 2024",
    likes: "45",
    dislikes: "7",
  },
  {
    name: "Social Media App",
    dev: "CodeMaster",
    about:
      "A social media application that connects people from around the world.",
    image: Demon,
    tags: ["Flutter", "Dart", "Firebase"],
    date: "1 Jan 2023",
    likes: "88",
    dislikes: "10",
  },
  {
    name: "Fitness Tracker",
    dev: "FitDev",
    about:
      "An app to track fitness activities and monitor health metrics.",
    image: getRandomImage(), // Randomly assign an image
    tags: ["Swift", "iOS", "HealthKit"],
    date: "10 Oct 2023",
    likes: "65",
    dislikes: "5",
  },
  {
    name: "AI Chatbot",
    dev: "AI Guru",
    about:
      "Developing an AI-powered chatbot for customer support.",
    image: getRandomImage(), // Randomly assign an image
    tags: ["Python", "TensorFlow", "NLP"],
    date: "5 Dec 2024",
    likes: "70",
    dislikes: "12",
  },
  {
    name: "Travel Booking Website",
    dev: "GlobeTrotter",
    about:
      "A website for booking travel packages and exploring destinations.",
    image: getRandomImage(), // Randomly assign an image
    tags: ["Angular", "TypeScript", "Node.js", "MySQL"],
    date: "20 Sep 2024",
    likes: "30",
    dislikes: "2",
  },
  {
    name: "Music Streaming Service",
    dev: "MusicLover",
    about:
      "A platform for streaming and discovering new music.",
    image: getRandomImage(), // Randomly assign an image
    tags: ["Vue.js", "Java", "Spring Boot", "PostgreSQL"],
    date: "3 Mar 2023",
    likes: "110",
    dislikes: "8",
  },
  {
    name: "Online Learning Portal",
    dev: "EduTech",
    about:
      "An online platform for learning new skills and courses.",
    image: getRandomImage(), // Randomly assign an image
    tags: ["React", "Node.js", "Express", "MongoDB"],
    date: "12 Jun 2024",
    likes: "95",
    dislikes: "6",
  },
];

