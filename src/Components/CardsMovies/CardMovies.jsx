import { useEffect, useState, useRef } from 'react'

function CardMovies(props) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [props.img])

  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  const handleImageError = () => {
    setIsLoaded(true)
  }

  return (
    <div
      ref={cardRef}
      className="w-[6.5rem] h-[16rem] flex flex-col items-center p-[0.18rem] m-[1rem] md:m-[1.5rem] box-border gap-[2rem] md:w-[13rem] md:h-[25rem]">
      <div className="relative">
        {isVisible && (
          <img
            src={props.img}
            alt={props.alt}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`w-[12rem] h-[10rem] object-cover rounded-inherit border-[##d8a011] rounded-[7px] border-[2px] shadow-[#000000b9] shadow-[0px_5px_15px] md:w-[10rem] md:h-[15rem] duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}/>
        )}

        {!isLoaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-300 animate-pulse rounded-[7px]"></div>
        )}
      </div>

      <div className="relative w-full flex items-center flex-col box-border px-[0.5rem] h-8">
        {isLoaded ? (
          <h2 className="font-[Mulish] hover:underline text-center font-[800] text-[13px] text-[#fff] md:text-[17px] transition-opacity duration-500 opacity-100">
            {props.link}
          </h2>
        ) : (
          <div className="absolute bottom-0 w-[70%] h-4 bg-gray-300 animate-pulse rounded"></div>
        )}
      </div>
    </div>
  )
}

export default CardMovies
