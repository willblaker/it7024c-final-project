import { TeamMember } from '../types/team';

export const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Will Blaker",
    role: "Programmer",
    avatar: require('../../assets/images/Willheadshot.png'),
    skills: ["HTML", "CSS", "JavaScript", "React"],
    interests: "Programming",
    hometown: {
      name: "Loveland, Ohio",
      lat: 39.26889,
      lng: -84.27056
    }
  },
  {
    id: "2",
    name: "Sawyer Davidson",
    role: "Developer",
    avatar: require('../../assets/images/headshot.jpg'),
    skills: ["HTML", "CSS", "JavaScript", "Cypress", "Jest"],
    interests: "Developing",
    hometown: {
        name: "Bexley, Ohio",
        lat: 39.96895,
        lng: -82.93768
    }
  },
  {
    id: "3",
    name: "William Okine",
    role: "Project Manager",
    avatar: require('../../assets/images/WilliamOkine1.jpg'),
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    interests: "Managing",
    hometown: {
        name: "Accra, Ghana",
        lat: 5.55602,
        lng: -0.1969
    }
  },
  {
    id: "4",
    name: "Casey Hull",
    role: "Researcher",
    avatar: require('../../assets/images/CaseyHullHeadshot.jpg'),
    skills: ["Multimedia Editing and Creation", "Sound Design", "Project Management", "Doing my best"],
    interests: "Researching",
    hometown: {
        name: "Wheelersburg, Ohio",
        lat: 38.733779,
        lng: -82.842411
    }
  }
];

export default function TeamData() {
    return null;
  }