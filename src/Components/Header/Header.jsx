import "./Header.css"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
    function clickSearch(){
      toast.warn("Funcionalidade em desenvolvimento")
      document.querySelector("input").value = "";
    }

    return (    
      <div className=" w-full flex items-center justify-between mb-[8rem] py-[1rem] px-[7rem]">
        <div className="flex items-center gap-[0.6rem]">
          <Link className="flex items-end justify-center flex-col" to="/">
            <h1 className="header-h1 font-[Mulish] font-[1000] text-[27px] text-[#f4b315]">MORUSU</h1>
            <h1 className="header-h2 font-[Josefinsans] font-[300] text-[20px] text-white">FLIX</h1>
          </Link>
          <img className="w-[4rem]" src="../../../public/assets/icons8-abelha-96.png" alt="" />
        </div>

        <div className="flex items-center">
            <input className="p-[0.4rem] rounded-s-[5px] outline-none bg-[#fff] w-[18rem] text-[#1a141a] placeholder:text-[#1a141a86]" placeholder="Pesquisar filmes ou series.." type="text" />
            <button className="transion-all duration-400 p-[0.4rem] bg-[#f4b315] rounded-e-[5px] w-[4rem] cursor-pointer hover:bg-[#d8a011] text-[#fff]" onClick={clickSearch}>🔎</button>
        </div>

          <Link className="favorites bg-[#f4b315] px-[1.5rem] py-[0.3rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to="/favorites"><p>Favoritos</p></Link>
        </div>
    );
  }
  
  export default Header;