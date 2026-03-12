import slide1 from "../slideimage1.png";
import slide2 from "../slideimage2.png";
import slide3 from "../slideimage3.png";
import slide4 from "../slideimage4.png";

import "../styles/SlideImage.css";

function SlideImage() {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-pause="hover"
    >

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="slide1" />
        </div>

        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="slide2" />
        </div>

        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="slide3" />
        </div>

        <div className="carousel-item">
          <img src={slide4} className="d-block w-100" alt="slide4" />
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default SlideImage;