import CardMovies from "../../Components/CardsMovies/CardMovies";
import { useEffect, useState} from "react";
import api from "../../Services/serviceApi";
import { Link, useParams } from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";
import BannerMovies from "../../Components/BannerMovie/BannerMovie";
import LineAlign from "../../Components/LineAlign/LineAlign";
import LinksGenres from "../../Components/LinksGenres/LinksGenres";
// import LinksPages from "../../Components/LinksPages/LinksPages";

// 2a1233e63324b80405a51d9575fc5937

// 20250226182153
// https://api.themoviedb.org/3
// https://api.themoviedb.org/3/movie/550?api_key=2a1233e63324b80405a51d9575fc5937
// https://api.themoviedb.org/3movie/now_playing?api_key=2a1233e63324b80405a51d9575fc5937

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const { page } = useParams()
  const currentPage = Number(page) || 1

  useEffect(() => {
    document.title = "MorusuFlix | Home";

    async function getMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "2a1233e63324b80405a51d9575fc5937",
          language: "pt-BR",
          page: currentPage,
        },
      });
      setMovies(response.data.results);
      setLoading(false);

      //console.log(response.data.results);
    }

    getMovies();
  }, [currentPage])

  if (loading) {
    return (
      <div className="flex flex-1 items-center flex-col">
        <img className="w-50" src="/assets/Spinner@1x-0.8s-200px-200px.svg" alt="loading" />
        <h2 className="text-2xl">Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div className="flex flex-1 gap-12 flex-col items-center w-full">
      <div className="w-full max-w-[90%] flex items-center justify-around mb-[1rem]">
        <LinksGenres genres="Em cartaz" />
        <LinksGenres genres="Ação" />
        <LinksGenres genres="Animação" />
        <LinksGenres genres="Aventura" />
        <LinksGenres genres="Comédia" />
        <LinksGenres genres="Drama" />
        <LinksGenres genres="Romance" />
        <LinksGenres genres="Suspense" />
        <LinksGenres genres="Terror" />
      </div>
      
      <BannerMovies bannerMovie={movies[2].backdrop_path}/>

      <LineAlign title="Em cartaz"/>

      <div className="max-w-[91%] flex flex-wrap flex-row justify-center items-center gap-10">
        {movies.map((movie) => {
          return (
            <CardMovies key={movie.id} title={movie.title} alt={movie.title} img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
            link={<Link to={`/moviesdetals/${movie.id}`}>{movie.title}</Link>}/>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
}

export default Home;