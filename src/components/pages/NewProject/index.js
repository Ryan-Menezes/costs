import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import ProjectForm from '../../project/ProjectForm';

function NewProject() {
  const history = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
    .then(res => res.json)
    .then(data => {
      history('/projetos', {
        message: 'Projeto criado com sucesso!',
      });
    })
    .catch(err => console.log(err));
  }

  return (
    <div className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>Crie o seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NewProject;
