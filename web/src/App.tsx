import { useState } from 'react'
import { useCourseData } from './hooks/use-course-data'
import './App.css'
import { Card } from './components/card/card-curso';
import { CourseData } from './interface/CourseData';

function App() {
  const { data } = useCourseData();

  return (
    
    <div className='container'>
      <h1>Cursos</h1>
      <div className="card-courses-grid">
        {data?.map(courseData => <Card
        title={courseData.title}
        professor={courseData.professor}
        category={courseData.category}
        description={courseData.description}
        image={courseData.image}
        active={courseData.active}
        />)}
      </div>

    </div>
    
  )
}

export default App
