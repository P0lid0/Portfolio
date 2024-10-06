import "../styles/Projetos.sass";
import pitstop from "../assets/pit-stop.png";

function Projetos() {
  return (
    <div className="Projetos" id="Projetos">
      <h2>Meus Projetos</h2>
      <a  target="_blank">
        <div className="Projeto">
          <img src={pitstop} alt="Pitstop" />
          <div className="Detalhes">
            <h3>PIT-STOP</h3>
            <p>
              O PIT-STOP é uma plataforma de apostas sobre o mundo da Formula-E, buscando trazer mais público para o esporte desenvolvemos uma plataforma gamificada para trazer um novo público para essa área.
            </p>
            <span>Status</span>
            <p className="success">Em andamento</p>
          </div>
        </div>
      </a>
      
        </div>
     
  );
}
export default Projetos;
