import { useState } from 'react';
import { useCourseData } from './hooks/use-course-data'
import { Card } from './components/card/card-course';
import { Search } from './components/search/search-course';
import './App.css'

function App() {
  const [input, setSearch] = useState('');
  const { data } = useCourseData(input);

  const handleSearch = (input: string) => {
    setSearch(input);
  }

  return (    
    <div className='container'>
      <h1>Cursos</h1>
      <Search onSearch={handleSearch} />
      <div className="card-courses-grid">
        {data?.map(courseData => <Card
        key={courseData.id}
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
