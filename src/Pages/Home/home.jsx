import CardMovies from "../../Components/CardsMovies/CardMovies";
import { useEffect, useState} from "react";
import api from "../../Services/serviceApi";
import { Link } from "react-router-dom";
// import LinksPages from "../../Components/LinksPages/LinksPages";

// 2a1233e63324b80405a51d9575fc5937

// 20250226182153
// https://api.themoviedb.org/3
// https://api.themoviedb.org/3/movie/550?api_key=2a1233e63324b80405a51d9575fc5937
// https://api.themoviedb.org/3movie/now_playing?api_key=2a1233e63324b80405a51d9575fc5937

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "MorusuFlix | Home";

    async function getMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "2a1233e63324b80405a51d9575fc5937",
          language: "pt-BR",
          page: 1,
        },
      });
      setMovies(response.data.results);
      setLoading(false);

      //console.log(response.data.results);
    }

    getMovies();
  }, [])

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

      <div className="w-full max-w-[90%] h-[25rem] flex items-center justify-center mb-[6rem] bg-[#000] rounded-[10px] overflow-hidden">
        <img className="w-full h-full object-cover object-top rounded-[10px]" 
          src={`https://image.tmdb.org/t/p/original/${movies[1].backdrop_path}`} alt="filme1"/>
      </div>


      <div className="w-full max-w-[90%] flex items-center justify-around mb-15">
        <hr className="w-full border-1 border-white border-solid"/>
        <h2 className="text-[25px] text-center w-170 font-[Mulish] color-white">Filmes em cartaz</h2>
        <hr className="w-full border-1 border-white border-solid"/>
      </div>

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
      {/* <LinksPages/> */}
    </div>
  );
}

export default Home;