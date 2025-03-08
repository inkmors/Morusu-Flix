import api from "../../Services/serviceApi"
import { useNavigate, useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import CardMovies from "../../Components/CardsMovies/CardMovies"
import LineAlign from "../../Components/LineAlign/LineAlign"
import InfoMorusu from "../../Components/InfosMorusu/InfoMorusu"

function Search(){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const apiKey = import.meta.env.VITE_API_KEY

    const { query, page } = useParams()
    const currentPage = Number(page) || 1

    useEffect(() => {
        document.title = "MorusuFlix | Search"
    
    async function searchMovies(){
        try{
            if(!query){
                navigate("/movies/1")
                return
            }
            const response = await api.get(`search/movie`, {
                params: {
                    api_key: apiKey,
                    language: "pt-BR",
                    page: currentPage,
                    query: query
                    
                },
            })
            if (!response.data.results || response.data.results.length === 0) {
                if(!toast.isActive("no-results")){
                    toast.warn("Nenhum resultado encontrado!", { toastId: "no-results" })
                }
                navigate("/movies/1")
                return
            }

            setMovies(response.data.results)     
        }catch(error){
            if(!toast.isActive("no-results")){
                toast.error("Erro ao carregar os filmes!", { toastId: "no-results" })
              }
            console.error(error)
            navigate("/", { replace: true })
        }finally{
            setLoading(false)
        }
    }

    searchMovies()
    }, [query, apiKey, currentPage, navigate])

    if (loading) {
        return (
        <div className="flex flex-1 items-center flex-col">
            <img className="w-50" src="/assets/Spinner@1x-0.8s-200px-200px.svg" alt="loading" />
            <h2 className="text-2xl">Carregando filmes...</h2>
        </div>
        )
    }
    return(
        <div className="flex flex-1 gap-12 flex-col items-center w-full">

            <InfoMorusu/>
            
            <LineAlign title="Filmes encontrados!" />

            <div className="max-w-[90%] flex flex-wrap flex-row justify-center items-center gap-4">
                {movies.length > 0 && 
                movies.map((movie) =>
                    movie.poster_path ? (
                    <CardMovies key={movie.id} title={movie.title} alt={movie.title} img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        link={<Link to={`/moviesdetals/${movie.id}`}>{movie.title}</Link>}/>
                    ) : null
                )}
            </div>
        </div>
    )
}

export default Search