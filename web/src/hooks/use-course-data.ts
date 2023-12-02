import { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { CourseData } from '../interface/CourseData';
import client from "../services/api";

const fetchData = async (search: string): AxiosPromise<CourseData[]> => {
  const response = client.get('/list-courses', { params: { search } })
  return response;
}

export function useCourseData(search: string) {
  const query = useQuery({
    queryFn: () => fetchData(search),
    queryKey: ['course-data', search],
    retry: 2
  });

  return {
    ...query,
    data: query.data?.data
  }
}
