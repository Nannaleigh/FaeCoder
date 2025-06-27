import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from '../main';
import ProjectsPage from '../pages/projects';
import WritingPage from '../pages/writing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/writing" element={<WritingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
ReactDOM.createRoot(document.getElementById("root")).render(<App />);