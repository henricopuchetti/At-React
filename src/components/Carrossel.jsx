import Carousel from 'react-bootstrap/Carousel';
import "../Super.css";

function Carrossel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img style={{width:"100%"}}
          className="imagem1"
          src="https://images.pexels.com/photos/7683832/pexels-photo-7683832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Viva bem</h3>
          <b className='txt-carro'>Abaixo mostraremos como podemos agregar a tecnologia em seu dia a dia para entregar uma qualidade de vida melhor</b>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%"}}
          className="imagem2"
          src="https://magportalmagprdstg.blob.core.windows.net/public/2021/01/sa%C3%BAde-e-qualidade-de-vida-como-conquistar.jpg"
        />

        <Carousel.Caption>
        <h3>Viva bem</h3>
        <b className='txt-carro'>Abaixo mostraremos como podemos agregar a tecnologia em seu dia a dia para entregar uma qualidade de vida melhor</b>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%"}}
          className="imagem3"
          src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Viva bem</h3>
        <b className='txt-carro'>Abaixo mostraremos como podemos agregar a tecnologia em seu dia a dia para entregar uma qualidade de vida melhor</b>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;