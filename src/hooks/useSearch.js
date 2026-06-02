import { useState, useCallback } from 'react';

/**
 * Hook personalizado para manejar búsqueda y filtrado
 * @param {Array} data - Array de elementos a buscar
 * @param {Array} searchFields - Nombres de campos a buscar (ej: ['name', 'description'])
 * @returns {Object} - { searchTerm, setSearchTerm, filteredData, clearSearch }
 */
export const useSearch = (data = [], searchFields = []) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useCallback(() => {
    if (!searchTerm.trim()) {
      return data;
    }

    const lowerTerm = searchTerm.toLowerCase();
    return data.filter(item => {
      // Si no hay campos especificados, buscar en todas las propiedades
      if (searchFields.length === 0) {
        return JSON.stringify(item).toLowerCase().includes(lowerTerm);
      }

      // Buscar en campos especificados
      return searchFields.some(field => {
        const value = item[field];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(lowerTerm);
        }
        return false;
      });
    });
  }, [searchTerm, data, searchFields]);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    filteredData: filteredData(),
    clearSearch,
    hasSearchResults: filteredData().length > 0
  };
};

/**
 * Hook para filtrado avanzado
 */
export const useFilter = (data = []) => {
  const [filters, setFilters] = useState({});

  const filteredData = useCallback(() => {
    if (Object.keys(filters).length === 0) {
      return data;
    }

    return data.filter(item => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        if (Array.isArray(value)) {
          return value.includes(item[key]);
        }
        return item[key] === value;
      });
    });
  }, [filters, data]);

  const addFilter = useCallback((key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const removeFilter = useCallback((key) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  return {
    filters,
    addFilter,
    removeFilter,
    clearFilters,
    filteredData: filteredData()
  };
};
