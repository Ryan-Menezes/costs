import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';

import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/novo-projeto" element={<NewProject />} />
          <Route path="/projetos/:id" element={<Project />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
