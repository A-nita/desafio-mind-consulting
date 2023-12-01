import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'
import { CourseData } from '../interface/CourseData';
// import { config } from 'dotenv'

// config();

const API_URL = 'http://localhost:3000';

const fetchData = async (): AxiosPromise<CourseData[]> => {
  const response = axios.get(API_URL + '/list-courses', )
  return response;
}

export function useCourseData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['course-data'],
    retry: 2
  });

  return {
    ...query,
    data: query.data?.data
  }
}