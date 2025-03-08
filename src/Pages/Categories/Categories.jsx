import CardMovies from "../../Components/CardsMovies/CardMovies"
import { useEffect, useState} from "react"
import api from "../../Services/serviceApi"
import { Link, useParams, useNavigate } from "react-router-dom"
import Pagination from "../../Components/Pagination/Pagination"
import BannerMovies from "../../Components/BannerMovie/BannerMovie"
import LineAlign from "../../Components/LineAlign/LineAlign"
import LinksGenres from "../../Components/LinksGenres/LinksGenres"
import InfoMorusu from "../../Components/InfosMorusu/InfoMorusu"
import { toast } from "react-toastify"

function Categories() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const apiKey = import.meta.env.VITE_API_KEY
  
  const { page, idGenre } = useParams()
  const currentPage = Number(page) || 1

  const genreTitles = {
    "28": "Ação",
    "16": "Animação",
    "12": "Aventura",
    "35": "Comédia",
    "18": "Drama",
    "10749": "Romance",
    "53": "Suspense",
    "27": "Terror"
  };
  
  const title = idGenre 
    ? `${genreTitles[idGenre] || "Categoria"}` 
    : "Em cartaz";
  

  useEffect(() => {
    document.title = "MorusuFlix | Categories"

    async function getMovies() {
      try {
        const response = await api.get("discover/movie", {
          params: {
            api_key: apiKey,
            language: "pt-BR",
            page: currentPage,
            with_genres: idGenre
            
          },
        })

        if (!response.data.results || response.data.results.length === 0) {
          navigate("/movies/1")
          return
        } 

        setMovies(response.data.results)
      } catch (error) {
        if(!toast.isActive("no-results")){
          toast.error("Erro ao carregar os filmes!", { toastId: "no-results" })
        }
        console.error(error)
        navigate("/", { replace: true })
      } finally {
        setLoading(false)
      }
    }

    getMovies()
  }, [currentPage, navigate, apiKey, idGenre])

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
      <InfoMorusu />

      <div className="flex-wrap w-full max-w-[90%] flex items-center justify-center mb-[0.5rem]">
        <LinksGenres genres="Ação" idGenre={28}/>
        <LinksGenres genres="Animação" idGenre={16} />
        <LinksGenres genres="Aventura" idGenre={12} />
        <LinksGenres genres="Fantasia" idGenre={14} />
        <LinksGenres genres="Comédia" idGenre={35} />
        <LinksGenres genres="Drama" idGenre={18} />
        <LinksGenres genres="Ficção" idGenre={878} />
        <LinksGenres genres="Romance" idGenre={10749} />
        <LinksGenres genres="Suspense" idGenre={53} />
        <LinksGenres genres="Terror" idGenre={27} />
      </div>
      
      {movies.length > 0 && <BannerMovies movies={movies} isCarousel={true}/>}

      <LineAlign title={title} />

      <div className="max-w-[90%] flex flex-wrap flex-row justify-center items-center gap-4">
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

export default Categories
