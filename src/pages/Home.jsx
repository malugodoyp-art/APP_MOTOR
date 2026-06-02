import { useState, useMemo } from 'react';
import { motorCategories, allMotorParts } from '../data/motorParts';
import SearchBar from '../components/SearchBar';
import CatalogCard from '../components/CatalogCard';
import { Wrench } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar categorías basado en búsqueda
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) {
      return motorCategories;
    }

    const lowerTerm = searchTerm.toLowerCase();

    // Buscar en categorías
    const matchingCategories = motorCategories.filter(
      cat =>
        cat.name.toLowerCase().includes(lowerTerm) ||
        cat.description.toLowerCase().includes(lowerTerm)
    );

    // Buscar en partes y obtener las categorías que las contienen
    const partsCategoryIds = new Set(
      allMotorParts
        .filter(
          part =>
            part.name.toLowerCase().includes(lowerTerm) ||
            part.function.toLowerCase().includes(lowerTerm) ||
            part.category.toLowerCase().includes(lowerTerm)
        )
        .map(part => part.categoryId)
    );

    // Combinar y eliminar duplicados
    const allMatchingIds = new Set([
      ...matchingCategories.map(c => c.id),
      ...partsCategoryIds
    ]);

    return motorCategories.filter(cat => allMatchingIds.has(cat.id));
  }, [searchTerm]);

  // Contar total de partes para mostrar
  const totalParts = allMotorParts.length;

  return (
    <div className="page-container">
      {/* Header */}
      <header className="home-header fade-in">
        <div className="badge">
          <Wrench size={14} />
          <span>Catálogo del Motor</span>
        </div>
        <h1 className="home-title">
          <span className="title-main">Motor Parts</span>
          <span className="title-subtitle">Catalogue</span>
        </h1>
        <p className="home-subtitle">
          Explora las {totalParts} piezas interactivas del motor de 4 tiempos
        </p>
      </header>

      {/* Search Bar */}
      <section className="search-section slide-in-left">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Buscar una pieza..."
        />
        {searchTerm && (
          <p className="search-results-info">
            Se encontraron <strong>{filteredCategories.length}</strong> categoría
            {filteredCategories.length !== 1 ? 's' : ''} que coinciden
          </p>
        )}
      </section>

      {/* Catalog Grid */}
      <section className="catalog-section">
        {filteredCategories.length > 0 ? (
          <>
            <h2 className="section-title">
              Catálogo de Partes del Motor
            </h2>
            <div className="catalog-grid">
              {filteredCategories.map((category) => (
                <div key={category.id} className="catalog-item-wrapper">
                  <CatalogCard item={category} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state fade-in">
            <div className="empty-state-icon">🔍</div>
            <h3 className="empty-state-title">No hay resultados</h3>
            <p className="empty-state-message">
              No encontramos piezas que coincidan con "{searchTerm}". Intenta con otro término de búsqueda.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setSearchTerm('')}
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </section>

      {/* Info Section */}
      <section className="info-section slide-in-right">
        <div className="info-card">
          <div className="info-number">28</div>
          <p className="info-text">Piezas Interactivas</p>
        </div>
        <div className="info-card">
          <div className="info-number">6</div>
          <p className="info-text">Categorías</p>
        </div>
        <div className="info-card">
          <div className="info-number">4</div>
          <p className="info-text">Tiempos del Motor</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
