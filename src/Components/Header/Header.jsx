import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
    function clickSearch(){
      alert("Funcionalidade em desenvolvimento")
    }


    return (
      <div className="flex items-center justify-between w-full mb-[6rem]
      py-[2rem] px-[7rem] ">
        <div className="logo-align">

            <Link className="flex items-end flex-col" to="/">
                <h1 className="font-[Mulish] font-[1000] text-[27px] text-[#f4b315]">MORUSU</h1>
                <h1 className="font-[Josefinsans] font-[300] text-[20px] text-white">FLIX</h1>
            </Link>
        </div>

        <div className="flex items-center">
            <input className="p-[0.4rem] rounded-s-[5px] outline-none bg-[#fff] w-[18rem] text-[#1a141a] placeholder:text-[#1a141a86]" placeholder="Pesquisar filmes ou series.." type="text" />
            <button className="transion-all duration-400 p-[0.4rem] bg-[#f4b315] rounded-e-[5px] w-[4rem] cursor-pointer hover:bg-[#d8a011] text-[#fff]" onClick={clickSearch}>🔎</button>
        </div>

        {/* <Link className="favorites" to="/favorites"><p>Ação</p></Link>
        <Link className="favorites" to="/favorites"><p>Comédia</p></Link>
        <Link className="favorites" to="/favorites"><p>Suspense</p></Link>
        <Link className="favorites" to="/favorites"><p>Em cartaz</p></Link> */}

        <Link className="favorites bg-[#f4b315] px-[2rem] py-[0.5rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#fff] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to="/favorites"><p>favoritos</p></Link>
      </div>
    );
  }
  
  export default Header;