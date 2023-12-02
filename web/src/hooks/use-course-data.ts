import axios, { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { CourseData } from '../interface/CourseData';

const API_URL = 'http://localhost:3000';

const fetchData = async (search: string): AxiosPromise<CourseData[]> => {
  const response = axios.get(API_URL + '/list-courses', { params: { search } })
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