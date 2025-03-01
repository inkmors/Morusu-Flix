import { useEffect } from "react";

function Error() {

    useEffect(() => {
      document.title = "Página não encontrada!";
    }, []);

    return (
      <div className="flex flex-1 flex-col items-center gap-10">
        <h2 className="text-2xl">Não foi possível encontrar essa página!</h2>
        <img className="w-25" src="assets/icons8-chorando-90.png" alt="imagem de Error" />
      </div>
    );
  }
  
  export default Error;