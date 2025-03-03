import api from "../../Services/serviceApi";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import FavoriteButton from "../../Components/FavoriteButton/FavoriteButton";

function Trailler({movieId}) {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const getTrailer = async () => {
      try {
        const response = await api.get(`movie/${movieId}/videos`, {
          params: {
            api_key: "2a1233e63324b80405a51d9575fc5937",
            language: "pt-BR",
          },
        });

        const trailers = response.data.results.filter(
          (movie) => movie.type === "Trailer" && movie.site === "YouTube"
        );

        if (trailers.length > 0) {
          setTrailerKey(trailers[0].key);
        }
      } catch (error) {
        console.log("Erro ao obter os trailers", error);
      }
    };

    getTrailer();
  }, [movieId]);
  return (
    <div className="w-full flex flex-col items-center justify-center mb-[10rem] mt-[5rem]">
      {trailerKey ? ( <ReactPlayer className="mb-[2rem]" url={`https://www.youtube.com/watch?v=${trailerKey}`} controls={true} width="50%" height="560px"/>) 
      : (<p className="font-[Mulish] text-[24px] text-[#f4b315] font-[800] mb-[2rem]">Trailer indisponível</p>)}

      <FavoriteButton/>
    </div>
  );
}

export default Trailler;