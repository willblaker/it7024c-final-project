export interface TeamMember {
    id: string;
    name: string;
    role: string;
    avatar: string;
    skills: string[];
    interests: string;
    hometown: {
      name: string;
      lat: number;
      lng: number;
    };
  }  

export default function TeamTypes() {
    return null;
}