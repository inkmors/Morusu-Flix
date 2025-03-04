import api from "../../Services/serviceApi";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

function Trailler({movieId}) {
  const [trailerKey, setTrailerKey] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    if (!movieId) return;

    const getTrailer = async () => {
      try {
        const response = await api.get(`movie/${movieId}/videos`, {
          params: {
            api_key: apiKey,
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
  }, [movieId, apiKey]);
  return (
<div className="w-full max-w-[90%] md:max-w-[70%] lg:max-w-[55%] flex flex-col items-center justify-center mb-20 mt-10">
      {trailerKey ? (
        <div className="w-full aspect-video">
          <ReactPlayer
            className="rounded-lg overflow-hidden"
            url={`https://www.youtube.com/watch?v=${trailerKey}`}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <p className="font-[Mulish] text-lg sm:text-xl md:text-2xl text-[#f4b315] font-extrabold mb-6 text-center">
          Trailer indisponível
        </p>
      )}
    </div>
  );
}

export default Trailler;