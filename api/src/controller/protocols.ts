export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}

export interface CourseInput {
  title: string;
  professor: string;
  category: string;
  description: string;
  image: string;
}
