import { useState, useMemo } from 'react';
import { allMotorParts, motorCategories } from '../data/motorParts';
import SearchBar from '../components/SearchBar';
import PartCard from '../components/PartCard';
import { Filter } from 'lucide-react';
import './Parts.css';

const Parts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filtrar partes basado en búsqueda y categoría
  const filteredParts = useMemo(() => {
    let results = allMotorParts;

    // Filtrar por categoría si está seleccionada
    if (selectedCategory) {
      results = results.filter(part => part.categoryId === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm.trim()) {
      const lowerTerm = searchTerm.toLowerCase();
      results = results.filter(
        part =>
          part.name.toLowerCase().includes(lowerTerm) ||
          part.category.toLowerCase().includes(lowerTerm) ||
          part.function.toLowerCase().includes(lowerTerm) ||
          part.description.toLowerCase().includes(lowerTerm)
      );
    }

    return results;
  }, [searchTerm, selectedCategory]);

  return (
    <div className="page-container">
      {/* Header */}
      <header className="parts-header fade-in">
        <h1 className="parts-title">Catálogo de Partes</h1>
        <p className="parts-subtitle">
          {filteredParts.length} de {allMotorParts.length} piezas
        </p>
      </header>

      {/* Search Section */}
      <section className="parts-search-section slide-in-left">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Buscar por nombre, función o categoría..."
        />
      </section>

      {/* Filters */}
      <section className="filters-section">
        <button
          className={`filter-toggle ${showFilters ? 'active' : ''}`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} />
          <span>Filtros ({selectedCategory ? 1 : 0})</span>
        </button>

        {showFilters && (
          <div className="filters-panel fade-in">
            <div className="filter-group">
              <h3 className="filter-title">Categorías</h3>
              <div className="filter-options">
                <button
                  className={`filter-option ${selectedCategory === null ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  Todas las categorías
                </button>
                {motorCategories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-option ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Parts Grid */}
      <section className="parts-grid-section">
        {filteredParts.length > 0 ? (
          <>
            <div className="parts-info">
              {searchTerm && (
                <p className="results-info">
                  Resultados de búsqueda para: <strong>"{searchTerm}"</strong>
                </p>
              )}
              {selectedCategory && (
                <p className="category-info">
                  Categoría: <strong>{motorCategories.find(c => c.id === selectedCategory)?.name}</strong>
                </p>
              )}
            </div>
            <div className="parts-grid">
              {filteredParts.map((part, index) => (
                <div key={part.id} className="part-item-wrapper" style={{animationDelay: `${index * 0.05}s`}}>
                  <PartCard part={part} showCategory={true} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state fade-in">
            <div className="empty-state-icon">🔍</div>
            <h3 className="empty-state-title">No hay resultados</h3>
            <p className="empty-state-message">
              {searchTerm
                ? `No encontramos partes que coincidan con "${searchTerm}".`
                : 'No hay partes en esta categoría.'}
            </p>
            <div className="empty-state-actions">
              {(searchTerm || selectedCategory) && (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }}
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Stats Section */}
      {filteredParts.length > 0 && (
        <section className="parts-stats-section slide-in-right">
          <div className="stat-item">
            <div className="stat-number">{filteredParts.length}</div>
            <p className="stat-label">Piezas mostradas</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">{new Set(filteredParts.map(p => p.categoryId)).size}</div>
            <p className="stat-label">Categorías</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <p className="stat-label">Información técnica</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Parts;
