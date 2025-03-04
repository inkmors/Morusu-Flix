import { Link } from "react-router-dom";

function LinksGenres(props){
    return(
        <div>
            <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[17px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={`/${props.genres}`}>{props.genres}</Link>
        </div>
    )
}

export default LinksGenres