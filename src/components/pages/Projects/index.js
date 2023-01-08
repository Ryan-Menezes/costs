import { useLocation } from 'react-router-dom';
import Message from '../../layout/Message';

function Projects() {
  const location = useLocation();
  const message = location.state ? location.state.message : '';

  return (
    <div>
      <h1>Meus Projetos</h1>
      {message && <Message type="success" msg={message} />}
    </div>
  );
}

export default Projects;
