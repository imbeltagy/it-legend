export interface Course {
  id: string;
  title: string;
  materials: {
    duration: string;
    lessons: number;
    students: number;
    language: string;
  };
  video: string;
  externalLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  };
}

export interface Comment {
  id: string;
  avatar: string;
  name: string;
  date: Date;
  comment: string;
}
