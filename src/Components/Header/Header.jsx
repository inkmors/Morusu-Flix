import "./Header.css"
import {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Header() {
    const [ query, setQuery ] = useState("")
    const navigate =useNavigate()

    function clickSearch(event) {
      event.preventDefault()
      if (!query.trim()) return
      navigate(`/search/${query.trim()}`)
      setQuery("")
  }
    return (    
      <div className="w-full flex-wrap flex flex-col lg:flex-row items-center justify-between mb-10 md:mb-16 py-4 px-4 md:px-10 lg:px-[7rem] gap-[3rem]">

        <div className="flex items-center gap-2">
          <Link className="flex items-end justify-center flex-col" to="/">
            <h1 className="header-h1 font-[Mulish] font-extrabold text-[24px] md:text-[27px] text-[#f4b315]">MORUSU</h1>
            <h1 className="header-h2 font-[Josefinsans] font-light text-[18px] md:text-[20px] text-white">FLIX</h1>
          </Link>
          <img className="w-[2.5rem] sm:w-[3rem] md:w-[4rem]" src="/assets/icons8-abelha-96.png" alt="" />
        </div>

        <form onSubmit={clickSearch} className="flex items-center w-full lg:w-[30%] box-border">
          <input 
            className="p-2 rounded-s-[5px] outline-none bg-white w-full lg:w-full text-[#1a141a] placeholder:text-[#1a141a86]" 
            placeholder="Pesquisar filmes ou séries.." 
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value.toLowerCase())} />
          <button type="submit" className="transition-all duration-400 p-2 bg-[#f4b315] rounded-e-[5px] w-[6rem] sm:w-[4rem] cursor-pointer hover:bg-[#d8a011] text-white" onClick={clickSearch}>🔎</button>
        </form>

        <Link className="favorites bg-[#f4b315] px-[2rem] py-[0.47rem] rounded-[5px] font-[Josefinsans] font-bold text-[18px] md:text-[16px] text-[#1a141a] no-underline hover:bg-[#ffffff] transition-all duration-400 hover:text-[#f4b315]" to="/favorites"><p>Favoritos</p></Link>
</div>
);
  }
  
  export default Header;