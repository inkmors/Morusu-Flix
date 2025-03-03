import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoMovies from "../../Components/InfoMovies/InfoMovies";
import api from "../../Services/serviceApi";

// height: 100vh;

function MovieDetals() {
    const { id } = useParams();
    const [ movieDetals, setMovieDetals ] = useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        document.title = "MorusuFlix | MoviesDetals";
      // const obj = [
      //   {
      //       id: 1,
      //       title: "Avatar 2",
      //       photo: "https://cpv.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
      //   }]
      //   localStorage.setItem('moviesFavorites', JSON.stringify(obj));  
    
      async function loadingMovies() {
        await api.get(`movie/${id}`, {
          params: {
            api_key: "2a1233e63324b80405a51d9575fc5937",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovieDetals(response.data)
          console.log(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Não encontrado!")
        });
      }
      loadingMovies();
      return ()=>{
        console.log("desmontou")
      }
    }, [id]);
    
    if (loading) {
      return (
        <div className="flex flex-1 items-center flex-col">
        <img className="w-50" src="/assets/Spinner@1x-0.8s-200px-200px.svg" alt="loading" />
        <h2 className="text-2xl">Buscando...</h2>
      </div>
      )
    }  

    return (
      <div className="flex flex-1 flex-row flex-wrap items-center justify-center w-full">
          <div className="w-full max-w-[90%] flex items-center justify-around mb-20">
            <hr className="w-full border-1 border-white border-solid"/>
            <h2 className="text-[25px] text-center w-170 font-[Mulish] color-white">Detalhes do filme</h2>
            <hr className="w-full border-1 border-white border-solid"/>
          </div>


        <InfoMovies key={movieDetals.id} title={movieDetals.title} alt={movieDetals.title} img={`https://image.tmdb.org/t/p/original/${movieDetals.backdrop_path}`} overview={`${movieDetals.overview.slice(0, 240)}...`} genre={`${movieDetals.genres[0].name}`} avalible={movieDetals.vote_average} duration={movieDetals.runtime} date={movieDetals.release_date} production={movieDetals.production_companies[0].name}/>
      
        <div className="w-full max-w-[90%] flex items-center justify-around mb-20">
          <hr className="w-full border-1 border-white border-solid"/>
          <h2 className="text-[25px] text-center w-170 font-[Mulish] color-white">Assista ao trailler</h2>
          <hr className="w-full border-1 border-white border-solid"/>
        </div>

      </div>
    );
  }
  
  export default MovieDetals;