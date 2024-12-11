export interface Project {
    id: string;
    title: string;
    description: string;
    image: any;
    technologies: string[];
  }
  
  export const projectData: Project[] = [
    {
      id: "1",
      title: "Vanilla JavaScript website",
      description: "A sleek vanilla JavaScript website highlighting our team members, skills, and project portfolio.",
      image: require('../../assets/images/placeholder-project.png'),
      technologies: ["JavaScript", "HTML5", "CSS3"]
    },
    {
      id: "2",
      title: "React-based Website",
      description: "A modern React-based team website showcasing our team members, skills, and project portfolio.",
      image: require('../../assets/images/placeholder-project.png'),
      technologies: ["React", "React Router", "Tailwind CSS"]
    }
  ];

  export default function ProjectData() {
    return null;
  }
  