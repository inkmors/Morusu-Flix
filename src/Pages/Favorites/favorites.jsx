//import { Link } from "react-router-dom";
import CardMovies from "../../Components/CardsMovies/CardMovies";
import { useState, useEffect } from "react";
import LineAlign from "../../Components/LineAlign/LineAlign";


 
 function Favorites(){
    //const [ moviesFav, setMoviesFav] = useState([]);

    useEffect(() => {
        document.title = "MorusuFlix | Favorites";

        //setMoviesFav(JSON.parse(localStorage.getItem('moviesFavorites')));

    }, []);
    
    return(
        <div className="flex flex-1 gap-12 flex-col items-center w-full">
            <LineAlign title="Favoritos" />

            {/* <div className="align-favorites">
                {moviesFav.map((favorite) => (
                    <CardMovies key={favorite.id} img={favorite.photo} alt={`Foto do filme ${favorite.title}`} link={favorite.title} />
                ))}
            </div> */}

        </div>
    )
 }

 export default Favorites