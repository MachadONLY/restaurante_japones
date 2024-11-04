import React from 'react';
import "../Sobre/Sobre.css";
import about from '../../assets/about.svg';

function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-content">
        <div className="sobre-section">
          <h1 className="sobre-title">Sobre Nós</h1>
          <p className="sobre-text">
            No coração da cidade, nosso restaurante japonês nasce da paixão por compartilhar a rica herança culinária do Japão. Fundado por Gabriel, um amante da cultura nipônica e da arte de cozinhar, o nosso espaço é um convite para uma verdadeira experiência sensorial. Desde os aromas envolventes do sushi fresco até o calor reconfortante da sopa de missô, cada prato é uma celebração dos ingredientes mais frescos e das técnicas tradicionais.
          </p>
          <p className="sobre-text">
            Nossa jornada começou em uma pequena cozinha, onde Gabriel e sua equipe de talentosos chefs se dedicaram a aperfeiçoar receitas que foram passadas de geração em geração. Cada refeição é elaborada com amor e respeito pela culinária japonesa, honrando os costumes que a tornam tão especial. Acreditamos que a comida é uma forma de arte, e em nosso restaurante, cada prato é uma obra-prima cuidadosamente elaborada.
          </p>
          <p className="sobre-text">
            Ao entrar, você será recebido por um ambiente acolhedor, decorado com elementos que refletem a estética japonesa. Do design minimalista às lanternas de papel, tudo foi pensado para que você se sinta parte de algo único e autêntico.
          </p>
          <p className="sobre-text">
            Nosso compromisso é proporcionar não apenas refeições, mas momentos memoráveis. Seja em um jantar romântico, uma reunião familiar ou uma celebração especial, estamos aqui para criar experiências que você guardará para sempre.
          </p>
          <p className="sobre-text">
            Venha nos visitar e embarque em uma deliciosa viagem ao Japão, onde cada garfada conta uma história!
          </p>
        </div>
        <div className="sobre-image">
          <img src={about} alt="Restaurante Japonês" />
        </div>
      </div>
    </div>
  );
}

export default Sobre;
