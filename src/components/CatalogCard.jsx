import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/components.css';

export default function CatalogCard({ item, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(item);
    } else {
      navigate(`/parts?category=${item.id}`);
    }
  };

  return (
    <div className="catalog-card" onClick={handleClick}>
      <div className="catalog-card-header">
        <div className="catalog-card-icon-wrapper">
          <div className="catalog-card-icon">{item.icon}</div>
        </div>
      </div>
      <div className="catalog-card-content">
        <h3 className="catalog-card-title">{item.name}</h3>
        <p className="catalog-card-description">{item.description}</p>
      </div>
      <div className="catalog-card-footer">
        <ChevronRight size={20} className="catalog-card-arrow" />
      </div>
    </div>
  );
}
