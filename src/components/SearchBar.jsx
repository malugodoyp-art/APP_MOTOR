import { Search } from 'lucide-react';
import '../styles/components.css';

export default function SearchBar({ value, onChange, placeholder = "Buscar..." }) {
  return (
    <div className="search-bar-container">
      <Search className="search-icon" size={20} />
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          className="search-clear"
          onClick={() => onChange('')}
          aria-label="Limpiar búsqueda"
        >
          ✕
        </button>
      )}
    </div>
  );
}
