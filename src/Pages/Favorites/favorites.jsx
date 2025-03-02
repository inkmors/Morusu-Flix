//import { Link } from "react-router-dom";
import CardMovies from "../../Components/CardsMovies/CardMovies";
import { useState, useEffect } from "react";


 
 function Favorites(){
    //const [ moviesFav, setMoviesFav] = useState([]);

    useEffect(() => {
        document.title = "MorusuFlix | Favorites";

        //setMoviesFav(JSON.parse(localStorage.getItem('moviesFavorites')));

    }, []);
    
    return(
        <div className="flex flex-1 gap-12 flex-col items-center w-full">
            <div className="w-full max-w-430 flex items-center justify-around mb-20">
                <hr className="w-full border-1 border-white border-solid"/>
                <h2 className="text-[25px] text-center w-170 font-[Mulish] color-white">Filmes favoritos</h2>
                <hr className="w-full border-1 border-white border-solid"/>
            </div>

            {/* <div className="align-favorites">
                {moviesFav.map((favorite) => (
                    <CardMovies key={favorite.id} img={favorite.photo} alt={`Foto do filme ${favorite.title}`} link={favorite.title} />
                ))}
            </div> */}

        </div>
    )
 }

 export default Favorites