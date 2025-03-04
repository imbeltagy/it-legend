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

export interface TopicsData {
  progress: number;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  items: TopicItem[];
}

export interface TopicItem {
  id: string;
  title: string;
  type: string;
  status: string;
  duration?: string;
  questions?: number;
  pdfUrl?: string;
}

export const enum TopicItemStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  LOCKED = 'LOCKED',
}

export const enum TopicItemType {
  PDF = 'PDF',
  VIDEO = 'VIDEO',
  EXAM = 'EXAM',
}
