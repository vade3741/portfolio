import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaBriefcase, FaTrophy } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi";

export const sections = [
  { id: "home", label: "Home", icon: <AiOutlineHome />, description: "Introduction and overview" },
  { id: "explore", label: "Explore", icon: <HiOutlineSparkles />, description: "Browse all chapters" },
  { id: "about", label: "About", icon: <AiOutlineUser />, description: "Background and tech stack" },
  { id: "experience", label: "Experience", icon: <FaBriefcase />, description: "Roles, impact, and growth" },
  { id: "projects", label: "Projects", icon: <AiOutlineFundProjectionScreen />, description: "Shipped builds and demos" },
  { id: "achievements", label: "Achievements", icon: <FaTrophy />, description: "Hackathons and recognition" },
  { id: "contact", label: "Contact", icon: <SiGmail />, description: "Get in touch" },
];

export const primaryNav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const exploreChapters = sections.filter(
  (s) => !["home", "explore", "contact"].includes(s.id)
);
