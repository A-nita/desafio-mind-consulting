import './card-course.css';

interface CardProps {
  title: string;
  professor: string;
  category: string;
  description: string;
  image: string;
  active: boolean;
}

export function Card({ title, professor, category, description, image, active }: CardProps) {
  return(
    <div className="card-curso">
      <img className="image-course" src={image} alt="Imagem relativa ao curso" />
      <h2 className="title-course">{title}</h2>
      <h3 className="professor-course">{professor}</h3>
      <h3 className="category-course">{category}</h3>
      <p className="description-course">{description}</p>
      <button className="btn-disable" disabled={!active}>Desativar</button>
      <button className="btn-edit" disabled={!active}>Editar</button>
    </div>
  )
}