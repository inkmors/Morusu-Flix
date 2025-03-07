import { useEffect } from "react";
import { Link } from "react-router-dom";

function Error() {

    useEffect(() => {
      document.title = "Página não encontrada!";
    }, []);

    return (
      <div className="flex flex-1 flex-col items-center gap-10">
        <h2 className="text-[15px] font-[Mulish] text-[#d8a011] text-center font-[800] md:text-[25px]">Não foi possível encontrar essa página!</h2>
        <img className="w-[5rem] mb-[3rem] md:w-[7rem]" src="/assets/icons8-chorando-90.png" alt="imagem de Error" />
        <Link className="bg-[#d8a011] px-[1rem] py-[0.4rem] rounded-[5px] font-[Josefinsans] font-[800] text-[16px] mb-[6rem] text-[#1a141a] no-underline hover transion-all duration-400 hover:bg-[#ffffff]" to={'/'}>Voltar para o home</Link>
      </div>
    );
  }
  
  export default Error;