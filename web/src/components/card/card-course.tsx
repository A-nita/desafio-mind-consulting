import './card-course.css';

interface CardProps {
  title: string;
  professor: string;
  category: string;
  description: string;
  image: { type: string, data: ArrayBuffer };
  active: boolean;
}

export function Card({ title, professor, category, description, image, active }: CardProps) {
  const handleBlobImg = (img: { type: string, data: ArrayBuffer }): string => {
    const blob = new Blob([new Uint8Array(img.data)], { type: img.type });
    const urlCreator = window.URL || window.webkitURL;

    return urlCreator.createObjectURL(blob);
  }

  return(
    <div className="card-curso">
      <img className="image-course" src={handleBlobImg(image)} alt="Imagem relativa ao curso" />
      <h2 className="title-course">{title}</h2>
      <p className="description-course">{description}</p>

     <div className="bottom-course">
      <div className="infos-course">
        <h3 className="professor-course">{professor}</h3>
        <h3 className="category-course">{category}</h3>
      </div>

      <div className="btns-course">
        <button className="btn btn-disable" disabled={!active}>{ active ? 'Desativar' : 'Ativar' }</button>
        <button className="btn btn-edit" disabled={!active}>Editar</button>
      </div>

     </div>
    </div>
  )
}