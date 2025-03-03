import { Link } from "react-router-dom";

function LinksGenres(props){
    return(
        <div>
            <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={`/${props.genres}`}>{props.genres}</Link>
        </div>
        
        /*{ <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/acao"}>Ação</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/aventura"}>Aventura</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/comedia"}>Comédia</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/drama"}>Drama</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/romance"}>Romance</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/suspense"}>Suspense</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline transion-all duration-400 hover:bg-[#ffffff] hover:text-[#f4b315]" to={"/terror"}>Terror</Link> }*/
    )
}

export default LinksGenres