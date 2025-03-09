import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function BannerMovies({ movies, isCarousel = true }) {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  if (!movies) return null

  if (Array.isArray(movies)) {
    if (!isCarousel) {
      const bannerMovie = movies.find(movie => movie.backdrop_path)
      if (!bannerMovie) return null
      return (
        <div className="w-full max-w-[90%] h-[25rem] flex items-center justify-center bg-[#000] rounded-[10px] overflow-hidden mb-[4rem] border-[#fff] border-[2px] relative">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded"></div>
          )}
          <img 
            className={`w-full h-full object-cover object-top rounded-[10px] ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} 
            src={`https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path}`} 
            alt={bannerMovie.title} 
            onLoad={handleImageLoad}
          />
        </div>
      )
    }

    const banners = movies.filter(movie => movie.backdrop_path).slice(0, 4)
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }

    return (
      <div className="w-full max-w-[90%] h-[10rem] md:h-[20rem] mb-4 md:mb-[5rem]">
        <Slider {...settings}>
          {banners.map(movie => (
            <div key={movie.id} className="h-[10rem] md:h-[20rem] mb-4 md:mb-[5rem] overflow-hidden relative">
              {isLoading && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded"></div>
              )}
              <img 
                className={`w-full h-full object-cover object-top rounded-[10px] border-2 border-[#fff] ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                alt={movie.title} 
                onLoad={handleImageLoad}
              />
            </div>
          ))}
        </Slider>
      </div>
    )
  } else if (movies.backdrop_path) {
    return (
      <div className="w-full max-w-[90%] h-[10rem] md:h-[20rem] flex items-center justify-center bg-[#000] rounded-[10px] overflow-hidden mb-[4rem] md:mb-[5rem] border-2 border-[#fff] relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse rounded"></div>
        )}
        <img 
          className={`w-full max-h-[25rem] object-cover object-top rounded-[10px] ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} 
          src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`} 
          alt={movies.title}
          onLoad={handleImageLoad}
        />
      </div>
    )
  }

  return null
}

export default BannerMovies
