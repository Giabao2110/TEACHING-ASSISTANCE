export interface Tutor {
  uid: string;
  displayName: string;
  email: string;
}

export type StudentStatus = 'On Track' | 'Delayed' | 'Accelerating';
export type Subject = 'Vật lí' | 'Toán';

export interface Student {
  id: string;
  tutorId: string;
  fullName: string;
  studentCode: string;
  subject: Subject;
  grade: number;
  school: string;
  targetScore: number;
  currentLevel: number;
  sessionsPerWeek: number;
  startDate: any; // Firestore Timestamp
  examDate: any; // Firestore Timestamp
  status: StudentStatus;
  notes: string;
  createdAt: any;
}

export interface StudyPlan {
  id: string;
  studentId: string;
  title: string;
  description: string;
  totalWeeks: number;
  progress: number;
}

export interface StudyStage {
  id: string;
  planId: string;
  name: string;
  order: number;
  durationWeeks: number;
  isCompleted: boolean;
}

export interface StudySession {
  id: string;
  studentId: string;
  date: any;
  topic: string;
  objective: string;
  content: string;
  homework: string;
  feedback: string;
  understandingLevel: number; // 1-5
  activeLevel: number; // 1-5
  nextSteps: string;
}

export type AssignmentStatus = 'Pending' | 'Submitted' | 'Checked';

export interface Assignment {
  id: string;
  studentId: string;
  title: string;
  dueDate: any;
  status: AssignmentStatus;
  score?: number;
}

export interface TestResult {
  id: string;
  studentId: string;
  title: string;
  date: any;
  correctAnswers: number;
  totalQuestions: number;
  score: number;
  timeSpent: number; // minutes
}

export type MistakeType = 
  | 'Kiến thức' 
  | 'Công thức' 
  | 'Tư duy' 
  | 'Biến đổi' 
  | 'Tính toán' 
  | 'Đơn vị' 
  | 'Điều kiện' 
  | 'Đọc đề' 
  | 'Bấm máy';

export interface MistakeLog {
  id: string;
  studentId: string;
  date: any;
  topic: string;
  type: MistakeType;
  description: string;
  example?: string;
  solution?: string;
  severity: number; // 1-5
}
