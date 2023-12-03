import { useState, useEffect } from 'react';
import { useCourseData } from '../../hooks/use-course-data'
import { Card } from '../../components/card/card-course';
import { Search } from '../../components/search/search-course';
import { ModalCreate } from '../../components/modal/modal-create';
import { ICourseInput } from '../../interface/CourseData';
import client from '../../services/api';

export default function Dashboard() {
  const [input, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen]= useState(false);
  const [selectedCourse, setSelectedCourse] = useState<ICourseInput|null>(null);
  const [categories, setCategories] = useState<Array<{ id: number, title: string }>>([]);
  const { data } = useCourseData(input);

  // Carrega as categorias ao carregar a página
  useEffect(() => {
    listCategoriesRequest();
  }, []);


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

  const listCategoriesRequest = async () => {
    const response = await client.get('/list-categories');

    setCategories(response.data);
  }

  const getCourseFromData = (id: string|number, title: string, description: string, category: string): ICourseInput => {
    return {
      id: Number(id),
      title,
      description,
      category,
      image: new File([], '')
    }
  }

  return (    
    <div className='container'>
      <h1>Cursos</h1>
      <Search onSearch={handleSearch} />
      <button onClick={() => handleModal(null)}>Criar curso</button>
      <div className="card-courses-grid">
        {data?.map(cd =>
          <Card
            key={cd.id}
            title={cd.title}
            professor={cd.professor}
            category={cd.category}
            description={cd.description}
            image={cd.image}
            active={cd.active}
            onClickEdit={() => handleModal(getCourseFromData(cd.id || '', cd.title, cd.description, cd.category))}
          />)}
        {data?.length === 0 && <div  className="notFound">Nenhum curso encontrado</div>}
      </div>
      {isModalOpen && <ModalCreate course={selectedCourse} close={handleCloseModal} categories={categories} />}
    </div>
  )
}
