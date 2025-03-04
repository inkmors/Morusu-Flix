import CardMovies from "../../Components/CardsMovies/CardMovies"
import { useEffect, useState} from "react"
import api from "../../Services/serviceApi"
import { Link, useParams, useNavigate } from "react-router-dom"
import Pagination from "../../Components/Pagination/Pagination"
import BannerMovies from "../../Components/BannerMovie/BannerMovie"
import LineAlign from "../../Components/LineAlign/LineAlign"
import LinksGenres from "../../Components/LinksGenres/LinksGenres"
import { toast } from "react-toastify"

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const apiKey = import.meta.env.VITE_API_KEY
  
  const { page } = useParams()
  const currentPage = Number(page) || 1

  useEffect(() => {
    document.title = "MorusuFlix | Home"

    async function getMovies() {
      try {
        const response = await api.get("movie/now_playing", {
          params: {
            api_key: apiKey,
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
        toast.error("Erro ao carregar os filmes!")
        console.error(error)
        navigate("/", { replace: true })
      } finally {
        setLoading(false)
      }
    }

    getMovies()
  }, [currentPage, navigate, apiKey])

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
      <div className="flex items-center w-full justify-around w-full max-w-[60%] mb-[6rem]">
        <div className="flex flex-col items-center">
          <h1 className="font-[Mulish] font-[1000] text-[46px] text-[#f4b315]">🍿 FIQUE POR DENTRO AGORA MESMO!</h1>
          <h2 className="font-[Josefinsans] font-[300] text-[30px] text-white">DAS NOVIDADES DOS <span className="text-[#f4b315]">FILMES</span> E <span className="text-[#f4b315]">SÉRIES</span> NA <strong className="font-[1000]"><span className="text-[#f4b315]">MORUSU</span>FLIX!!</strong></h2>
        </div>
        <img className="w-[9rem]" src="/assets/icons8-abelha-96.png" alt="" />
      </div>

      <div className="w-full max-w-[90%] flex items-center justify-around mb-[0.5rem]">
        <LinksGenres genres="Cartaz" />
        <LinksGenres genres="Ação" />
        <LinksGenres genres="Animação" />
        <LinksGenres genres="Aventura" />
        <LinksGenres genres="Comédia" />
        <LinksGenres genres="Drama" />
        <LinksGenres genres="Romance" />
        <LinksGenres genres="Suspense" />
        <LinksGenres genres="Terror" />
        {/* Modelo para eu não esquecer de desenvolver */}
      </div>
      
      {movies.length > 0 && <BannerMovies movies={movies} isCarousel={true}/>}

      <LineAlign title="Em cartaz" />

      <div className="max-w-[90%] flex flex-wrap flex-row justify-center items-center gap-10">
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
