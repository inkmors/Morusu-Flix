import './favorites.css'
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
        <div className="container-favorites">
            <div className="align-favorites">
                <hr />
                <h2>Filmes Favoritos</h2>
                <hr />
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