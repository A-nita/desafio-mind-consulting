import { useState } from 'react';
import { useCourseData } from '../../hooks/use-course-data'
import { Card } from '../../components/card/card-course';
import { Search } from '../../components/search/search-course';
import { ModalCreate } from '../../components/modal/modal-create';
import { ICourseInput } from '../../interface/CourseData';

export default function Dashboard() {
  const [input, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen]= useState(false);
  const [selectedCourse, setSelectedCourse] = useState<ICourseInput|null>(null);

  const { data } = useCourseData(input);

  const handleSearch = (input: string) => {
    setSearch(input);
  }
  
  const handleModal = (course: ICourseInput|null) => {
    setIsModalOpen(!isModalOpen);
    setSelectedCourse(course);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (    
    <div className='container'>
      <h1>Cursos</h1>
      <Search onSearch={handleSearch} />
      <button onClick={() => handleModal(null)}>Criar curso</button>
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
        {data?.length === 0 && <div  className="notFound">Nenhum curso encontrado</div>}
      </div>
      {isModalOpen && <ModalCreate course={selectedCourse} close={handleCloseModal} />}
    </div>
  )
}
