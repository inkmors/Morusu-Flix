import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
    return (
      <div className="flex items-center justify-between w-full mb-[6rem]
      py-[2rem] px-[7rem] ">
        <div className="logo-align">

            <Link className="flex items-end flex-col" to="/home">
                <h1 className="font-[Mulish] font-[1000] text-[27px] text-[#f4b315]">MORUSU</h1>
                <h1 className="font-[Josefinsans] font-[300] text-[20px] text-white">FLIX</h1>
            </Link>
        </div>

        <div className="flex items-center">
            <input className="p-[0.6rem] rounded-s-[5px] outline-none bg-[#fff] w-[15rem] text-[#1a141a] placeholder:text-[#1a141a86]" placeholder="Funcionalidade em desenvolvimento" type="text" />
            <button className="btn-search p-[0.6rem] bg-[#f4b315] rounded-e-[5px] w-[4rem] cursor-pointer hover:bg-[#fff] text-[#f4b315]">🔎</button>
        </div>

        {/* <Link className="favorites" to="/favorites"><p>Ação</p></Link>
        <Link className="favorites" to="/favorites"><p>Comédia</p></Link>
        <Link className="favorites" to="/favorites"><p>Suspense</p></Link>
        <Link className="favorites" to="/favorites"><p>Em cartaz</p></Link> */}

        <Link className="favorites bg-[#d8a011] px-[2rem] py-[0.5rem] rounded-[5px] font-[Josefinsans] font-[800] text-[17px] text-white no-underline hover:bg-[#ffffff] hover:text-[#f4b315]" to="/favorites"><p>Favoritos</p></Link>
      </div>
    );
  }
  
  export default Header;