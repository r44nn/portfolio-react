import '../styles/Project.css';
import foto1 from '../assets/foto1.png';
import foto2 from '../assets/foto2.png';
import foto3 from '../assets/foto3.png';
import foto4 from '../assets/foto4.png';

function Project() {
  return (
    <section className="project-section" id="projects">
      <div className="container">
        <h1>Project</h1>
        <div className="image-gallery">
          <img src={foto1} alt="Foto Project 1" />
          <img src={foto2} alt="Foto Project 2" />
          <img src={foto3} alt="Foto Project 3" />
          <img src={foto4} alt="Foto Project 4" />
        </div>
      </div>
    </section>
  );
}

export default Project;
