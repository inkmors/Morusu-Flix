import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InfoMovies from "../../Components/InfoMovies/InfoMovies";
import api from "../../Services/serviceApi";
import BannerMovies from "../../Components/BannerMovie/BannerMovie";
import LineAlign from "../../Components/LineAlign/LineAlign";
import Trailler from "../../Components/Trailler/Trailler";
// height: 100vh;

function MovieDetals() {
    const { id } = useParams();
    const [ movieDetals, setMovieDetals ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();

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
          console.log(response.data)
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true })
          return
        });
      }
      loadingMovies()
    }, [id, navigate]);
    
    if (loading) {
      return (
        <div className="flex flex-1 items-center flex-col">
        <img className="w-50" src="/assets/Spinner@1x-0.8s-200px-200px.svg" alt="loading" />
        <h2 className="text-2xl">Carregando Detalhes...</h2>
      </div>
      )
    }  

    return (
      <div className="flex flex-1 flex-row flex-wrap items-center justify-center w-full">

        <BannerMovies bannerMovie={movieDetals.backdrop_path}/>

        <LineAlign title="Detalhes do filme" />

        <InfoMovies key={movieDetals.id} title={movieDetals.title} alt={movieDetals.title} img={`https://image.tmdb.org/t/p/original/${movieDetals.poster_path}`} overview={`${movieDetals.overview.slice(0, 240)}...`} genre={`${movieDetals.genres[0].name}`} avalible={movieDetals.vote_average} duration={movieDetals.runtime} date={new Date(movieDetals.release_date).toLocaleString("pt-BR").slice(0, 10)} production={movieDetals.production_companies[0].name}/>
      
        <LineAlign title="Assista ao Trailler" />

        <Trailler movieId={movieDetals.id}/>
      </div>
    );
  }
  
  export default MovieDetals;