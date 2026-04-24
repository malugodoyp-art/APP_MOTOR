import { NavLink } from 'react-router-dom';
import { Home, Settings, RotateCw, HelpCircle } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  const navItems = [
    { name: 'Inicio', path: '/', icon: <Home size={24} /> },
    { name: 'Partes', path: '/parts', icon: <Settings size={24} /> },
    { name: '4 Tiempos', path: '/strokes', icon: <RotateCw size={24} /> },
    { name: 'Quiz', path: '/quiz', icon: <HelpCircle size={24} /> },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          {item.icon}
          <span>{item.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
