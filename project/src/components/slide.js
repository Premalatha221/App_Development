import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import toy1 from '../assets/images/toy1.webp';
import toy2 from '../assets/images/toy2.avif';
import toy3 from '../assets/images/toy3.avif';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Link to="/login">
    <div className="home">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={toy1} alt="Toys" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={toy2} alt="Chicago" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={toy3} alt="New York" />
        </Carousel.Item>
      </Carousel>
      <style jsx>{`
        .carousel-image {
          width: 100%;
          height: auto;
          max-height: 500px;
        }

        @media screen and (max-width: 1200px) {
          .carousel-image {
            max-height: 450px;
          }
        }

        @media screen and (max-width: 992px) {
          .carousel-image {
            max-height: 400px;
          }
        }

        @media screen and (max-width: 768px) {
          .carousel-image {
            max-height: 350px;
          }
        }

        @media screen and (max-width: 576px) {
          .carousel-image {
            max-height: 300px;
          }
        }
      `}</style>
    </div>
    </Link>
  );
};

export default Home;
