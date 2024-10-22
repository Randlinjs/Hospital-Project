// import React from 'react';
// import '../css/Home.css'; // Custom CSS if needed
// import image1 from '../images/hospitalBG.jpg';
// const Home = () => {
//   return (
//     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//       </div>
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img src={image1} className="d-block w-100" alt="Hospital 1" />
//           <div className="carousel-caption d-none d-md-block">
//             <h1 className="hospital-title">GANGA HOSPITAL</h1>
//             <p className="subtitle">BEST SUPER SPECIALITY</p>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src={image1} className="d-block w-100" alt="Hospital 2" />
//           <div className="carousel-caption d-none d-md-block">
//             <h1 className="hospital-title">GANGA HOSPITAL</h1>
//             <p className="subtitle">BEST SUPER SPECIALITY</p>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src={image1} className="d-block w-100" alt="Hospital 3" />
//           <div className="carousel-caption d-none d-md-block">
//             <h1 className="hospital-title">GANGA HOSPITAL</h1>
//             <p className="subtitle">BEST SUPER SPECIALITY</p>
//           </div>
//         </div>
//       </div>
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }

// export default Home;



// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/Home.css'; 
// import image1 from '../images/hospitalBG.png';
// import image2 from '../images/kims.jpg';
// import image3 from '../images/apollo.jpg';
// import image4 from '../images/saveetha.jpg'; // Add more images if needed

// const CarouselComponent = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [image1, image2, image3, image4]; // Add your images here

//   // Move to the next 2 slides
//   const nextSlides = () => {
//     const nextIndex = (currentIndex + 1) % images.length;
//     setCurrentIndex(nextIndex);
//   };

//   // Move to the previous 2 slides
//   const prevSlides = () => {
//     const prevIndex = (currentIndex - 1 + images.length) % images.length;
//     setCurrentIndex(prevIndex);
//   };

//   return (
//     <div id="carouselExampleIndicators" className="carousel slide">
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img src={images[currentIndex]} className="d-block w-100" alt="Slide" />
//           <div className="carousel-caption d-none d-md-block">
//             <h1 className="hospital-title">GANGA HOSPITAL</h1>
//             <p className="subtitle">BEST SUPER SPECIALITY</p>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src={images[(currentIndex + 1) % images.length]} className="d-block w-100" alt="Slide" />
//           <div className="carousel-caption d-none d-md-block">
//             <h1 className="hospital-title">GANGA HOSPITAL</h1>
//             <p className="subtitle">BEST SUPER SPECIALITY</p>
//           </div>
//         </div>
//       </div>
      
//       {/* Buttons to slide 2 items */}
//       <button className="carousel-control-prev" type="button" onClick={prevSlides}>
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" onClick={nextSlides}>
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default CarouselComponent;

// import React, { useState, useEffect } from 'react';
// import '../css/Home.css'; // Import the CSS file for styling
// import image1 from "../images/hospitalBG.png";
// import image2 from "../images/hospitalBG.png";
// import image3 from "../images/hospitalBG.png";
// function Carousel() {
//   const images = [
//   image1,image2,image3
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);


//   // Function to move to the next slide
//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Function to move to the previous slide
//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="carousel-container">
//       <div
//         className="carousel-slides"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//           transition: 'transform 1s ease-in-out',
//         }}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             className="carousel-slide"
//           />
//         ))}
//       </div>
//       <button className="carousel-btn prev-btn" onClick={goToPrevSlide}>
//         &#10094;
//       </button>
//       <button className="carousel-btn next-btn" onClick={goToNextSlide}>
//         &#10095;
//       </button>
//     </div>
//   );
// }

// export default Carousel;




import React, { useState} from 'react';
import '../css/Home.css'; // Import the CSS file for styling
import image1 from "../images/hospitalBG.png";
import image2 from "../images/hospitalBG.png";
import image3 from "../images/hospitalBG.png";
function Carousel() {
  const images = [
  image1,image2,image3
  ];
    const [currentIndex, setCurrentIndex] = useState(1); // Start from index 1 (the first slide after extra one)
    const [isTransitioning, setIsTransitioning] = useState(false); // Handle smooth transitions
    const [direction, setDirection] = useState('next'); // Track direction
    const [homeText, setHomeText] = useState(false);
  
    const totalSlides = images.length;
    const extendedSlides = [images[totalSlides - 1], ...images, images[0]]; // Add the last and first image for seamless transition
  
  
    // Ensure infinite looping and reset without transition
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
  
      if (currentIndex === 0) {
        // If we moved to the first extra slide (before actual first)
        setCurrentIndex(totalSlides);
      } else if (currentIndex === totalSlides + 1) {
        // If we moved to the last extra slide (after actual last)
        setCurrentIndex(1);
      }
    };
  
    // Function to move to the next slide
    const goToNextSlide = () => {
      setDirection('next');
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setHomeText(!homeText);
    };
  
    // Function to move to the previous slide
    const goToPrevSlide = () => {
      setDirection('prev');
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setHomeText(!homeText);
    };
  
    return (
      <div className="carousel-container">
        <div
          className="carousel-slides"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="carousel-slide"
            />
          ))}
        </div>
        <div className='hospitalHead'>
          <div className={`homeHead${homeText ? 'Center' : 'Left'}`}>GANGA HOSPITAL</div><br />
          <div className={`homeHeadCon${homeText ? 'Center' : 'Left'}`}>BEST SUPER SPECIALITY</div>
        </div>
        <button className="carousel-btn prev-btn" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className="carousel-btn next-btn" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
    );
  }
  
  export default Carousel;
  