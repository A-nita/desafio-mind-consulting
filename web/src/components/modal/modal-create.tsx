import "./modal.css";
import { useState } from "react";
import { ICourseInput } from "../../interface/CourseData";
import client from "../../services/api";

interface InputProps {
  label: string;
  value: string | number,
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateValue: any;
}

interface InputModal {
  course: ICourseInput | null;
  close: () => void;
}

const Input = ({ label, value, type , updateValue }: InputProps) => {
  return (
    <div className="input-block">
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} value={value} onChange={(e) => updateValue(e.target.value)} />
    </div>
  );
}

export function ModalCreate({ course, close }: InputModal) {
  const [title, setTitle] = useState(course?.title || '');
  const [description, setDescription] = useState(course?.description || '');
  const [category, setCategory] = useState(course?.category || '');
  const [image, setImage] = useState(course?.image || new File([], ''));

  const submit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
    
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('image', image);
  
      const response = await client.post('/create-course', formData);

      if (response.status !== 200) {
        console.log('Erro ao cadastrar curso:', response.data);
      }

      setTitle('');
      setDescription('');
      setCategory('');
      setImage(new File([], ''));

      close();
    } catch (error) {
      console.log(error);
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
          {/* title, descrição, categoria, imagem */}

          <Input label="Título" value={title} type="text" updateValue={setTitle} />

          <Input label="Descrição" value={description} type="text-area" updateValue={setDescription} />

          <div className="input-block-select">
            <label htmlFor="category">Categoria</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value='1'>Frontend</option>
              <option value='2'>Backend</option>
              <option value='3'>Mobile</option>
            </select>
          </div>

          <div className="input-block">
            <label htmlFor="Imagem">Imagem</label>
            <input type="file" id="Imagem" onChange={handleImage} />
          </div>

          <button onClick={close} className="btn-close">Fechar</button>
          <button onClick={submit} className="btn-secondary">Salvar</button>
        </form>
      </div>
    </div>
  )
}