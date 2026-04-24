import { useState } from 'react';
import { Search } from 'lucide-react';
import './Parts.css';

const engineParts = [
  {
    id: 1,
    name: 'Pistón',
    description: 'Pieza cilíndrica que se mueve de arriba abajo dentro del cilindro. Comprime la mezcla y transmite la fuerza de la explosión.',
    icon: '⚙️',
  },
  {
    id: 2,
    name: 'Biela',
    description: 'Elemento que une el pistón con el cigüeñal. Transforma el movimiento rectilíneo del pistón en movimiento circular.',
    icon: '🔗',
  },
  {
    id: 3,
    name: 'Cigüeñal',
    description: 'Eje acodado que convierte el movimiento lineal de las bielas en movimiento rotatorio.',
    icon: '🔩',
  },
  {
    id: 4,
    name: 'Válvula de Admisión',
    description: 'Se abre para permitir el ingreso de la mezcla de aire y combustible al cilindro.',
    icon: '📥',
  },
  {
    id: 5,
    name: 'Válvula de Escape',
    description: 'Se abre para permitir la salida de los gases producto de la combustión hacia el escape.',
    icon: '📤',
  },
  {
    id: 6,
    name: 'Árbol de Levas',
    description: 'Eje con protuberancias (levas) encargado de abrir y cerrar las válvulas en el momento exacto.',
    icon: '📏',
  },
  {
    id: 7,
    name: 'Bujía',
    description: 'Produce la chispa eléctrica que enciende la mezcla dentro del cilindro (en motores a gasolina).',
    icon: '⚡',
  }
];

const Parts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredParts = engineParts.filter(part => 
    part.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container animate-fade-in">
      <h2 className="page-title">Partes <span className="text-gradient">Móviles</span></h2>
      <p className="page-desc">Explora los componentes internos de un motor.</p>

      <div className="search-bar glass-panel">
        <Search size={20} color="var(--text-secondary)" />
        <input 
          type="text" 
          placeholder="Buscar una pieza..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="parts-grid">
        {filteredParts.map((part, index) => (
          <div 
            key={part.id} 
            className={`glass-panel glass-card part-card stagger-${(index % 4) + 1}`}
          >
            <div className="part-icon-wrapper">
              <span className="part-emoji">{part.icon}</span>
            </div>
            <div className="part-info">
              <h3>{part.name}</h3>
              <p>{part.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parts;
