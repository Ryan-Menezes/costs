import styles from './style.module.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../../layout/Container';
import Loading from '../../layout/Loading';
import LinkButton from '../../layout/LinkButton';
import Message from '../../layout/Message';
import ProjectCard from '../../project/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  const location = useLocation();
  const message = location.state ? location.state.message : '';

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => {
      setProjects(data);
      setRemoveLoading(true);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/novo-projeto" text="Criar Projeto"  />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 && projects.map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            budget={project.budget}
            category={project.category}
          />
        ))}

        {!removeLoading && <Loading />}

        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
