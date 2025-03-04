import { Link } from "react-router-dom";

function CardMovies(props) {

  return (
    <div className="w-[13rem] h-[32rem] flex flex-col items-center p-[0.18rem] m-[1.5em] box-border gap-[2rem]">

        <img className='w-[10rem] h-[15rem] object-cover rounded-inherit border-[##d8a011] rounded-[7px] border-[2px] shadow-[#000000b9] shadow-[0px_5px_15px]' src={props.img} alt={props.alt} />
        
        <div className='w-full flex items-center flex-col box-border px-[0.5rem]'>
            <h2 className='font-[Mulish] text-center font-[800] text-[17px] text-[#ffffff]'>{props.title}</h2>
        </div>

        <div className='flex flex-row items-center gap-[0.5rem]'>

          <Link className="bg-[#d8a011] px-[1rem] py-[0.2rem] rounded-[5px] font-[Josefinsans] font-[800] text-[14px] text-[#1a141a] no-underline hover transion-all duration-400 hover:bg-[#ffffff]" to={`/moviesdetals/${props.id}}`}>Detalhes</Link>

          <button className='bg-[#ba3434] px-[1rem] py-[0.2rem] rounded-[5px] font-[Josefinsans] font-[800] text-[14px] text-[#1a141a] no-underline transion-all duration-400 hover:bg-[#ffffff] cursor-pointer' onClick={ props.delet }>Deletar</button>
        </div>
    </div>
  );
}

export default CardMovies;
