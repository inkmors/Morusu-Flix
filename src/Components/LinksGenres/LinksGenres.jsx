
import { Link } from "react-router-dom";

function LinksGenres(props){
    const genreLink = props.idGenre ? `/categories/1/${props.idGenre}` : `/movies/1`

    return(
        <div className="flex flex-row items-center m-[0.5rem]">
            <Link className="bg-[#f4b315] px-[1.2rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[17px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={genreLink}>{props.genres}</Link>
        </div>
    )
}


export default LinksGenres