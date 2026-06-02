import '../styles/components.css';

export default function PartCard({ part, onClick, showCategory = true }) {
  const handleClick = () => {
    if (onClick) {
      onClick(part);
    }
  };

  return (
    <div className="part-card" onClick={handleClick}>
      <div className="part-card-header">
        <div className="part-card-image-wrapper">
          <div className="part-card-image">
            {part.icon ? part.icon : part.name.charAt(0)}
          </div>
        </div>
      </div>
      <div className="part-card-content">
        {showCategory && <p className="part-card-category">{part.category}</p>}
        <h4 className="part-card-title">{part.name}</h4>
        <p className="part-card-function">{part.function}</p>
      </div>
      <div className="part-card-footer">
        <button className="part-card-button">Ver Detalles</button>
      </div>
    </div>
  );
}
