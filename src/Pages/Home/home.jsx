import CardMovies from "../../Components/CardsMovies/CardMovies"
import { useEffect, useState} from "react"
import api from "../../Services/serviceApi"
import { Link, useParams, useNavigate } from "react-router-dom"
import Pagination from "../../Components/Pagination/Pagination"
import BannerMovies from "../../Components/BannerMovie/BannerMovie"
import LineAlign from "../../Components/LineAlign/LineAlign"
import LinksGenres from "../../Components/LinksGenres/LinksGenres"

// 2a1233e63324b80405a51d9575fc5937

// 20250226182153
// https://api.themoviedb.org/3
// https://api.themoviedb.org/3/movie/550?api_key=2a1233e63324b80405a51d9575fc5937
// https://api.themoviedb.org/3movie/now_playing?api_key=2a1233e63324b80405a51d9575fc5937

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  
  const { page } = useParams()
  const currentPage = Number(page) || 1

  useEffect(() => {
    document.title = "MorusuFlix | Home"

    async function getMovies() {
      try {
        const response = await api.get("movie/now_playing", {
          params: {
            api_key: "2a1233e63324b80405a51d9575fc5937",
            language: "pt-BR",
            page: currentPage,
            region: "BR",
          },
        })

        if (!response.data.results || response.data.results.length === 0) {
          navigate("/movies/1")
          return
        } 

        setMovies(response.data.results)
      } catch (error) {
        console.error("Erro ao carregar os filmes", error)
        navigate("/", { replace: true })
      } finally {
        setLoading(false)
      }
    }

    getMovies()
  }, [currentPage, navigate])

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
        <LinksGenres genres="Cartaz" />
        <LinksGenres genres="Ação" />
        <LinksGenres genres="Animação" />
        <LinksGenres genres="Aventura" />
        <LinksGenres genres="Comédia" />
        <LinksGenres genres="Drama" />
        <LinksGenres genres="Romance" />
        <LinksGenres genres="Suspense" />
        <LinksGenres genres="Terror" />
      </div>
      
      {movies.length > 0 && <BannerMovies bannerMovie={movies[0].backdrop_path} />}

      <LineAlign title="Em cartaz" />

      <div className="max-w-[91%] flex flex-wrap flex-row justify-center items-center gap-10">
        {movies.length > 0 && 
          movies.map((movie) =>
            movie.poster_path ? (
              <CardMovies key={movie.id} title={movie.title} alt={movie.title} img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                link={<Link to={`/moviesdetals/${movie.id}`}>{movie.title}</Link>}/>
            ) : null
          )
        }
      </div>
      <Pagination />
    </div>
  )
}

export default Home
