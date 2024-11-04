  import React, { useState, useEffect } from "react";
  import "../Home/Home.css";
  import slide1 from "../../assets/slide1.svg";
  import slide2 from "../../assets/slide2.svg";
  import slide3 from "../../assets/slide3.svg";
  import slide4 from "../../assets/slide4.svg";

  const slides = [slide1, slide2, slide3, slide4];

  function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000); 

      return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
      setCurrentSlide(index);
    };

    return (
      <div className="home-container h-screen">
        <div className="home-section">
          <div className="slideshow">
            <img
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="slide-image"
            />
            <div className="slideshow-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
            <div className="journal-section">
              <h2 className="journal-title">Conheça o Nosso Restaurante</h2>
              <p className="journal-content">
                Venha experimentar o melhor da culinária japonesa em um ambiente acolhedor e autêntico. Nossos chefs utilizam ingredientes frescos e tradicionais para criar pratos que encantam o paladar e a alma.
                Todos os dias, temos novas opções que vão surpreender você!
                Não perca a chance de provar a verdadeira essência da gastronomia japonesa.
              </p>
              <button className="journal-button">Reserve Sua Mesa!</button>
            </div>
          </div>
          <div className="cards">
            <h2 className="specials-title">Nossos Pratos Especiais</h2>
            <div className="card">
              <img className="card-image" src={slide1} alt="Sushi" />
              <p className="card-description">Sushi - R$20,00</p>
            </div>
            <div className="card">
              <img className="card-image" src={slide2} alt="Sashimi" />
              <p className="card-description">Sashimi - R$30,00</p>
            </div>
            <div className="card">
              <img className="card-image" src={slide3} alt="Ramen" />
              <p className="card-description">Ramen - R$25,00</p>
            </div>
            <div className="card">
              <img className="card-image" src={slide4} alt="Tempura" />
              <p className="card-description">Tempura - R$22,00</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Home;
