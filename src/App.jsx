import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Parts from './pages/Parts';
import Strokes from './pages/Strokes';
import Quiz from './pages/Quiz';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/strokes" element={<Strokes />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
