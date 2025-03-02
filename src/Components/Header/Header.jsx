import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
    return (
      <div className="flex items-center justify-between w-full mb-[6rem]
      py-[2rem] px-[7rem] ">
        <div className="logo-align">

            <Link className="flex items-end flex-col text-none" to="/home">
                <h1 className="font-[Mulish] font-[1000] text-[27px] text-[#f4b315]">MORUSU</h1>
                <h1 className="font-[Josefinsans] font-[300] text-[20px] text-white">FLIX</h1>
            </Link>
        </div>
        {/* <Link className="favorites" to="/favorites"><p>Ação</p></Link>
        <Link className="favorites" to="/favorites"><p>Comédia</p></Link>
        <Link className="favorites" to="/favorites"><p>Suspense</p></Link>
        <Link className="favorites" to="/favorites"><p>Em cartaz</p></Link> */}

        <Link className="favorites bg-[#d8a011] px-[1rem] py-[0.5rem] rounded-[5px] font-[Josefinsans] font-[800] text-[17px] text-white text-none hover:bg-[#ffffff] hover:text-[#f4b315]" to="/favorites"><p>Favoritos</p></Link>
      </div>
    );
  }
  
  export default Header;