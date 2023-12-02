import { useState } from 'react';
import './search-course.css';

interface SearchProps {
  onSearch: (input: string) => void
}

export function Search({ onSearch }: SearchProps) {
  const [input, setInput] = useState('');
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(input);
  }

  return(
    <form className="search-container" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Buscar curso"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type='submit'>Buscar</button>
    </form>
  )
}