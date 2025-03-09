import React, { useState } from "react"
import FavoriteButton from "../FavoriteButton/FavoriteButton"

function InfoMovies(props) {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-[70rem] flex flex-col items-center justify-center mb-20 mt-20 px-4">

      <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 mb-20">

        {isLoading && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-[15px]"></div>
        )}

        <img
          className={`w-full md:w-[30rem] h-auto md:h-[35rem] object-cover rounded-[15px] border-2 border-[#f4b315] ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          src={props.img}
          alt={props.alt}
          onLoad={handleImageLoad}
        />
    
        <div className="w-full md:w-auto flex flex-col items-start max-w-[35rem] gap-4 p-4">
          <h2 className="font-[Mulish] text-xl md:text-[24px] text-[#f4b315] font-extrabold"> Título: <span className="text-white font-normal">{props.title}</span></h2>
          <h2 className="font-[Mulish] text-xl md:text-[24px] text-[#f4b315] font-extrabold">Sinopse: <span className="text-white font-normal">{props.overview}</span></h2>
          <h2 className="font-[Mulish] text-xl md:text-[24px] text-[#f4b315] font-extrabold">Gênero: <span className="text-white font-normal">{props.genre}</span></h2>
          <h2 className="font-[Mulish] text-xl md:text-[24px] text-[#f4b315] font-extrabold">Avaliação: <span className="text-white font-normal">{`${props.avalible} / 10`}</span></h2>
          <h2 className="font-[Mulish] text-xl md:text-[24px] text-[#f4b315] font-extrabold">Duração: <span className="text-white font-normal">{props.duration}</span></h2>
          <h2 className="font-[Mulish] text-xl md:text-[24px] text-[#f4b315] font-extrabold">Data de produção: <span className="text-white font-normal">{props.date}</span></h2>
          <h2 className="font-[Mulish] text-xl md:text-[24px] text-[#f4b315] font-extrabold">Produção: <span className="text-white font-normal">{props.production}</span></h2>
        </div>
      </div>

      <FavoriteButton onClick={() => props.saveMovie(props)} />
    </div>
  )
}

export default InfoMovies
