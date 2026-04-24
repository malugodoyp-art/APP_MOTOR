import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container animate-fade-in">
      <header className="home-header">
        <div className="badge stagger-1">
          <Wrench size={14} />
          <span>Mecánica Automotriz</span>
        </div>
        <h1 className="stagger-2">
          Instituto <br />
          <span className="text-gradient">Alberto Enríquez</span>
        </h1>
        <p className="subtitle stagger-3">
          Aprende el funcionamiento de las partes móviles de un motor de combustión interna de cuatro tiempos.
        </p>
      </header>

      <div className="hero-image-container stagger-4">
        <div className="glow-effect behind-image"></div>
        <img 
          src="/assets/engine_hero.png" 
          alt="Motor de combustión interna" 
          className="hero-image animate-float"
        />
      </div>

      <div className="action-buttons stagger-4">
        <Link to="/strokes" className="btn-primary">
          Empezar a Aprender
          <ArrowRight size={20} />
        </Link>
        <Link to="/parts" className="btn-outline">
          Glosario de Partes
        </Link>
      </div>
    </div>
  );
};

export default Home;
