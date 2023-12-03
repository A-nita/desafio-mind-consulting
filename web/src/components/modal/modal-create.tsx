import "./modal.css";
import { useState } from "react";
import { ICourseInput } from "../../interface/CourseData";
import client from "../../services/api";

interface InputModal {
  course: ICourseInput | null;
  close: () => void;
  categories: Array<{ id: number, title: string }>;
}

interface InputProps {
  label: string;
  value: string | number,
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateValue: any;
}

const Input = ({ label, value, type , updateValue }: InputProps) => {
  return (
    <div className="input-block">
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} value={value} onChange={(e) => updateValue(e.target.value)} />
    </div>
  );
}


export function ModalCreate({ course, close, categories }: InputModal) {
  const getCategoryKey = (category: string): number => {
    const categoryItem = categories.find(categoryItem => categoryItem.title === category);

    return categoryItem?.id || 1;
  }

  const [title, setTitle] = useState(course?.title || '');
  const [description, setDescription] = useState(course?.description || '');
  const [category, setCategory] = useState<string|number>(course?.category ? getCategoryKey(course.category) : 1);
  const [image, setImage] = useState<File|undefined>(undefined);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {   
      const formData = new FormData();

      if (course) {
        formData.append('id', String(course.id));
      }
      
      if (!title || !description || !category) {
        setError('Preencha todos os campos');
        return;
      }

      if (!image) {
        setError('Selecione uma imagem');
        return;
      }

      formData.append('title', title);
      formData.append('description', description);
      formData.append('category', category.toString());
      formData.append('image', image);
  
      const url = course ? `/edit-course` : '/create-course';
      const response = await client.post(url, formData);
  
      if (response.status !== 200) {
        console.log('Erro ao salvar curso:', response.data);
        setError(response.data);
      }
  
      setTitle('');
      setDescription('');
      setCategory('');
      setImage(new File([], ''));
  
      close();

      window.location.reload();
    } catch (error) {
      console.log(error);
      setError('Erro ao salvar curso');
    }
  }

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setImage(e.target.files[0]);
    }
  }

  return(
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastrar um novo curso</h2>
        <form action="form-modal">
          <Input label="Título" value={title} type="text" updateValue={setTitle} />

          <Input label="Descrição" value={description} type="text-area" updateValue={setDescription} />

          <div className="input-block-select">
            <label htmlFor="category">Categoria</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map(categoryItem => (
                <option key={categoryItem.id} value={categoryItem.id}>{categoryItem.title}</option>
              ))}
            </select>
          </div>

          <div className="input-block">
            <label htmlFor="Imagem">Imagem</label>
            <input type="file" id="Imagem" onChange={handleImage} />
          </div>

          {
            error && <p className="error">{error}</p>
          }

          <button onClick={close} className="btn-close">Fechar</button>
          <button onClick={submit} className="btn-secondary">Salvar</button>
        </form>
      </div>
    </div>
  )
}