import "./modal.css";
import { useState } from "react";

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

export function ModalCreate() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Frontend');
  const [image, setImage] = useState('');

  const submit = () => {};

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
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Mobile">Mobile</option>
            </select>
          </div>

          <Input label="Imagem" value={image} type="file" updateValue={setImage} />

          <button onClick={submit} className="btn-secondary">Salvar</button>
        </form>
      </div>
    </div>
  )
}