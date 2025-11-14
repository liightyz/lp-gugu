import "./App.css";
import bgImage from "./assets/kama.png";
import pagelogo from "./assets/kama-logo.jpg";

export default function App() {
  return (
    <div className="landing" style={{ backgroundImage: `url(${bgImage})` }}>
      
      {/* MENU SUPERIOR */}
      <div className="header">
        <img src={pagelogo} width="120" />

        <div className="infos">
          <a href="#">SHOWS</a>
          <a href="#">INFORMAÇÕES</a>
        </div>

        <button
          className="compra-ingresso"
          onClick={() =>
            window.open(
              "https://www.kamaitachi.com.br",
              "_blank"
            )
          }
        >
          COMPRAR INGRESSOS
        </button>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="main-content">
        <div className="video-box">
          
          <iframe
            src="https://www.youtube.com/embed/dGa7x1trFtE"
            title="FHK TEASER"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      
        </div>
      </div>
      
    </div>
  );
}
