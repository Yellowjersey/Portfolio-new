import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './Layout/AppLayout';
import Home from './Pages/Home';
import Education from './Pages/Education';
import Projects from './Pages/Projects';
import './App.css';

import Skills from './Pages/Skills';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={<Projects />} />
          <Route path="hobbies" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
