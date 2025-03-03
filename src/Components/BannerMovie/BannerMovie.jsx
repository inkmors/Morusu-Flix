import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BannerMoviesCarousel({ movies }) {
  const validMovies = movies.filter(movie => movie.backdrop_path).slice(0, 4);

  const settings = {
    dots: false,       
    infinite: true,      
    autoplay: true,     
    autoplaySpeed: 5000,  
    slidesToShow: 1,      
    slidesToScroll: 1,    
    arrows: false         
  };

  return (
    <div className="w-full max-w-[90%] h-[25rem] mb-[4rem]">
      <Slider {...settings}>
        {validMovies.map(movie => (
          <div key={movie.id} className="h-full">
            <img 
              className="w-full h-[25rem] object-cover object-top rounded-[10px] border-[2px] border-[#fff]"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerMoviesCarousel;
