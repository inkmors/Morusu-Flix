import CardsFavorites from "../../Components/CardsFavorites/CardsFavorites";
import { useState, useEffect } from "react";
import LineAlign from "../../Components/LineAlign/LineAlign";
import { toast } from "react-toastify";

 function Favorites(){
    const [ moviesFav, setMoviesFav] = useState([]);

    useEffect(() => {
        document.title = "MorusuFlix | Favorites";

        const moviesFavorites = localStorage.getItem('@morusuFlix');
        setMoviesFav(JSON.parse(moviesFavorites) || []);
    }, []);

    function deletMovie(id){
        let filterMovies = moviesFav.filter( (moviesFav) => {
            return (moviesFav.id !== id)     
        })
        
        setMoviesFav(filterMovies);
        localStorage.setItem('@morusuFlix', JSON.stringify(filterMovies));
        toast.success('Filme/série removido com sucesso!');
    }
    
    return(
        <div className="flex flex-1 gap-12 flex-col items-center w-full mb-[15rem]">
            <LineAlign title="Meus Favoritos" />

            {moviesFav.length === 0 && (
                <h2 className="font-[Mulish] text-[24px] text-[#f4b315] font-[800]">Você não possui nenhum filme ou série salvo!</h2>
            )}
            
            <div className="flex flex-wrap items-center justify-center">
                {moviesFav.map((favorite) => (
                    <CardsFavorites key={favorite.id} id={favorite.id} img={favorite.img} alt={`Foto do filme ${favorite.title}`} title={favorite.title} delet={() => deletMovie(favorite.id)} />
                ))}
            </div>
        </div>
    )
 }

 export default Favorites