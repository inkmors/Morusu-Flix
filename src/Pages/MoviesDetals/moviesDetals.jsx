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
 
      async function loadingMovies() {
        await api.get(`movie/${id}`, {
          params: {
            api_key: "2a1233e63324b80405a51d9575fc5937",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovieDetals(response.data)
          setLoading(false);
          console.log(response.data)
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

        <InfoMovies key={movieDetals.id} title={movieDetals.title || 'Título não disponível'} alt={movieDetals.title || 'Título não disponível'} 
        img={`https://image.tmdb.org/t/p/original/${movieDetals.poster_path}`} 
        overview={movieDetals.overview ? `${movieDetals.overview.slice(0, 240)}...` : 'Descrição não disponível'} 
        genre={movieDetals.genres && movieDetals.genres.length > 0 ? movieDetals.genres[0].name : 'Gênero não disponível'} 
        avalible={movieDetals.vote_average.toFixed(1) || 'Não disponível'} 
        duration={movieDetals.runtime ? `${movieDetals.runtime} minutos` : 'Duração não disponível'} 
        date={movieDetals.release_date ? new Date(movieDetals.release_date).toLocaleDateString("pt-BR") : 'Data não disponível'} 
        production={movieDetals.production_companies && movieDetals.production_companies[0] ? movieDetals.production_companies[0].name : 'Produtora não disponível'} />

        <LineAlign title="Assista ao Trailler" />

        <Trailler movieId={movieDetals.id}/>
      </div>
    );
  }
  
  export default MovieDetals;