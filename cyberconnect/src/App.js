import React from 'react';
import './App.css';
import { FiUsers } from "react-icons/fi";
import Banner from "./images/CYBERCONNECTBANNER.png";
import CardImage1 from "./images/card1.png"; // Importe as imagens para os cards
import CardImage2 from "./images/card2.png";


function Card({ title, description, image }) {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo à CyberConnect</h1>
        <nav className="App-navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#planos">Planos de internet</a></li>
            <li><a href="#sobre">Sobre nós</a></li>
            <li><a href="#login"><FiUsers size={25} color="#27E400" /></a></li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <div>
          <h2>Conectando Você ao Futuro</h2>
          <p>Descubra nossos planos de internet de alta velocidade e desfrute de uma conexão sem limites.</p>
        </div>
        <div className="banner">
          <img src={Banner} alt="Banner" />
        </div>
        <div>
          <h2>Conheça as Operadoras disponiveis</h2>
          
        </div>
        <div className="card-container">
          <Card
            title="Plano Básico com a Claro"
            description="Ideal para navegar na internet e usar redes sociais."
            image={CardImage1}
          />
          <Card
            title="Plano Premium com a Vivo"
            description="Perfeito para streaming de vídeo em alta definição e jogos online."
            image={CardImage2}
          />
          {/* Adicione mais cards conforme necessário */}
        </div>
      </main>
      <footer className="App-footer">
        <div>
          <p>&copy; 2024 CyberConnect. Todos os direitos reservados.</p>
          <p>Entre em contato: contato@cyberconnect.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
