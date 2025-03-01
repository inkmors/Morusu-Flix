import "./home.css"
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
      <div className="loading">
        <img src="/assets/Spinner@1x-0.8s-200px-200px.svg" alt="loading" />
        <h2>Buscando filmes..</h2>
      </div>
    )
  }

  return (
    <div className="flex flex-1 gap-12 flex-col items-center">
      <div className="containnerTitleMovies">
        <hr />
        <h2>Filmes em cartaz</h2>
        <hr />
      </div>

      <div className="flex flex-wrap flex-row justify-center items-center gap-10">
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