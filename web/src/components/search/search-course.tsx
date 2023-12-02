import { useState } from 'react';
import './search-course.css';

interface SearchProps {
  onSearch: (input: string) => void
}

export function Search({ onSearch }: SearchProps) {
  const [input, setInput] = useState('');
 
  return(
    <div className="search-container">
      <input 
        type="text"
        placeholder="Buscar curso"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={() => onSearch(input)}>Buscar</button>
    </div>
  )
}