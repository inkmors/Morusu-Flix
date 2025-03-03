import CardMovies from "../../Components/CardsMovies/CardMovies";
import { useEffect, useState} from "react";
import api from "../../Services/serviceApi";
import { Link, useParams } from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";
import BannerMovies from "../../Components/BannerMovie/BannerMovie";
import LineAlign from "../../Components/LineAlign/LineAlign";
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
        <h2 className="text-2xl">Buscando...</h2>
      </div>
    )
  }

  return (
    <div className="flex flex-1 gap-12 flex-col items-center w-full">

      <div className="w-full max-w-[90%] flex items-center justify-around mb-[1rem]">
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/emcartaz"}>Em cartaz</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/acao"}>Ação</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/aventura"}>Aventura</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/comedia"}>Comédia</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/drama"}>Drama</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/romance"}>Romance</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline hover:bg-[#ffffff] transion-all duration-400 hover:text-[#f4b315]" to={"/suspense"}>Suspense</Link>
        
        <Link className="bg-[#d8a011] px-[1.4rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] text-[#1a141a] no-underline transion-all duration-400 hover:bg-[#ffffff] hover:text-[#f4b315]" to={"/terror"}>Terror</Link>
      </div>

      <BannerMovies bannerMovie={movies[2].backdrop_path}/>

      <LineAlign title="Em cartaz"/>

      <div className="max-w-[91%] flex flex-wrap flex-row justify-center items-center gap-10">
        {movies.map((movie) => {
          return (
            <CardMovies
              key={movie.id}
              title={movie.title}
              alt={movie.title}
              img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              link={<Link to={`/moviesdetals/${movie.id}`}>{movie.title}</Link>}
            />
            // <CardMovies key={movie.id} title={movie.title} alt={movie.title} avalible={movie.vote_average} img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} link={<Link to={`/moviesdetals/${movie.id}`}>Saiba mais</Link>}/>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
}

export default Home;