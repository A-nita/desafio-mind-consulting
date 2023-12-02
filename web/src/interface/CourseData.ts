export interface ICourseData {
  id?: string;
  title: string;
  description: string;
  professor: string;
  category: string;
  image: { type: string, data: ArrayBuffer };
  active: boolean;
}