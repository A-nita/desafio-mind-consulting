export interface ICourseData {
  id?: number;
  title: string;
  description: string;
  professor: string;
  category: string;
  image: { type: string, data: ArrayBuffer };
  active: boolean;
}

export interface ICourseInput {
  id?: number;
  title: string;
  description: string;
  category: string;
  image: File;
}