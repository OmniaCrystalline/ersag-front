import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './Carousel.style.css'

const data = [
  "https://res.cloudinary.com/dligd0nd6/image/upload/v1728911290/mygmipv6hicmqch1cpmc.jpg",
  "https://res.cloudinary.com/dligd0nd6/image/upload/v1728910320/tbsmpwnihwumw3ljsiwk.jpg",
  "https://res.cloudinary.com/dligd0nd6/image/upload/v1728910285/aui5fmohrvrxfoh6ysl9.jpg",
  "https://res.cloudinary.com/dligd0nd6/image/upload/v1728910282/fjasys5i2zuqdrq9pvsg.jpg",
];


const CarouselElem = () => {
  return (
    <div className='car-wrapper'>
      <img
        className='abs'
        src='https://res.cloudinary.com/dligd0nd6/image/upload/v1728912015/ehm7wcnq9tnpwcmgfqpg.png'
        alt='ersag'
      />
      <Carousel>
        {data?.map((e, index) => (
          <div key={index} id={index} className='a'>
            <img src={e} alt='ecology' />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselElem;
