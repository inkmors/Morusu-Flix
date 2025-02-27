import { useEffect } from "react";

import "./moviesDetals.css"

function MovieDetals() {
    useEffect(() => {
        document.title = "MorusuFlix | MoviesDetals";
      }, []);

    return (
      <div className="container-moviesDetals">

      </div>
    );
  }
  
  export default MovieDetals;