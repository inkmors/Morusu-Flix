import React, { useState } from "react"
import { Link } from "react-router-dom"

function CardMovies(props) {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="w-[6.5rem] h-[22rem] flex flex-col items-center p-[0.18rem] m-[1.5rem] box-border gap-[2rem] md:w-[13rem] md:h-[32rem]">
      <div className="relative">
        <img
          className={`w-[12rem] h-[10rem] object-cover rounded-inherit border-[##d8a011] rounded-[7px] border-[2px] shadow-[#000000b9] shadow-[0px_5px_15px] md:w-[10rem] md:h-[15rem] ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          src={props.img}
          alt={props.alt}
          onLoad={handleImageLoad}/>

          {isLoading && (
            <div className="absolute w-full h-full bottom-0 bg-gray-300 animate-pulse rounded-[7px]"></div>
          )}
      </div>

      <div className="relative w-full flex items-center flex-col box-border px-[0.5rem]">
        {!isLoading ? (
          <h2 className="font-[Mulish] text-center font-[800] text-[13px] text-[#ffffff] md:text-[17px]">{props.title}</h2>
        ) : (
          <div className="absolute top-0 w-[70%] h-8 bg-gray-300 animate-pulse rounded"></div>
        )}  
      </div>

      

      <div className="flex flex-col items-center gap-[0.5rem] box-border md:flex-row ">
        <Link
          className="bg-[#d8a011] px-[0.5rem] py-[0.1rem] rounded-[5px] font-[Josefinsans] font-[800] text-[13px] text-[#1a141a] no-underline hover transion-all duration-400 hover:bg-[#ffffff] md:px-[1rem] md:py-[0.2rem] md:text-[14px]"
          to={`/moviesdetals/${props.id}`}>Detalhes</Link>
        <button
          className="bg-[#ba3434] px-[0.5rem] py-[0.1rem] rounded-[5px] font-[Josefinsans] font-[800] text-[13px] text-[#1a141a] no-underline transion-all duration-400 hover:bg-[#ffffff] cursor-pointer md:px-[1rem] md:py-[0.2rem] md:text-[14px]"
          onClick={props.delet}>Deletar</button>

      </div>
    </div>
  )
}

export default CardMovies
