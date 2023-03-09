import * as React from 'react';
import './card.scss';
import 'bootstrap';

export default function MediaCard() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" aria-label="Slide 1" className="active" aria-current="true" ></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToxb56Sx5VyIu-gsANkhae0bmENKHp2BaXg&usqp=CAU" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block d-md-block">
            <h5>First slide label</h5>

          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1xn_X2etugTQJxq4FAGKy9UZBFyvj6ofgQ&usqp=CAU" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block d-md-block">
            <h5>Second slide label</h5>

          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1xn_X2etugTQJxq4FAGKy9UZBFyvj6ofgQ&usqp=CAU" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block d-md-block">
            <h5>Second slide label</h5>

          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8FuLANcNwn2Izy2Otfo-Luflk2z1UpVCrNg&usqp=CAU" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block d-md-block">
            <h5>Third slide label</h5>

          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8FuLANcNwn2Izy2Otfo-Luflk2z1UpVCrNg&usqp=CAU" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block d-md-block">
            <h5>four slide label</h5>

          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}