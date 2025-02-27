import "./error.css"
import { useEffect } from "react";

function Error() {

    useEffect(() => {
      document.title = "Página não encontrada!";
    }, []);

    return (
      <div className="container-error">
        <h3>Não foi possível encontrar essa página!</h3>
        <img src="assets/cabeca-alienigena.png" alt="imagem de Error" />
      </div>
    );
  }
  
  export default Error;