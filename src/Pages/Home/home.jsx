import "./home.css"
import CardMovies from "../../Components/CardsMovies/CardMovies";
import { useEffect, useState} from "react";
import api from "../../Services/serviceApi";
import { Link } from "react-router-dom";

// 2a1233e63324b80405a51d9575fc5937

// 20250226182153
// https://api.themoviedb.org/3
// https://api.themoviedb.org/3/movie/550?api_key=2a1233e63324b80405a51d9575fc5937
// https://api.themoviedb.org/3movie/now_playing?api_key=2a1233e63324b80405a51d9575fc5937

function Home() {
    const [ movies, setMovies] = useState([]);

    useEffect(() => {
      document.title = "MorusuFlix | Home";

      async function getMovies() {
        const response = await api.get("movie/now_playing",{
          params:{
            api_key: "2a1233e63324b80405a51d9575fc5937",
            language: "pt-BR",
            page: 1,
          }
        });
        setMovies(response.data.results);

        console.log(response.data.results);
      }

      getMovies();
    }, []);

    return (
      <div className="container-home">
        <div className="containnerTitleMovies">
          <hr />
          <h2>Filmes em cartaz</h2>
          <hr />
        </div>

        <div className="align-moviesList">
          {movies.map((movie) => {
            return (
              <CardMovies key={movie.id} title={movie.title} alt={movie.title} avalible={movie.vote_average} img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} link={<Link to={`/moviesdetals/${movie.id}`}>Saiba mais</Link>}/>
            )
          })}
        </div>
      </div>
    );
  }
  
  export default Home;