import FavoriteButton from "../FavoriteButton/FavoriteButton";

function InfoMovies(props) {
  return (
    <div className="w-full max-w-[70rem] flex flex-col items-center justify-center mb-[5rem] mt-[5rem]">
        <div className='w-full flex items-center box-border justify-between gap-[2rem] mb-[5rem]'>
          <img className='w-[30rem] h-[35rem] object-cover rounded-[15px] border-[#f4b315] border-[2px]' src={props.img} alt={props.alt} />

          <div className='w-full flex flex-col items-start max-w-[35rem] gap-[1rem] p-[1rem]'>
            <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Título: <span className='text-[#ffffff] font-[400]'>{props.title}</span></h2>
            <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Sinopse: <span className='text-[#ffffff] font-[400]'>{props.overview}</span></h2>
            <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Gênero: <span className='text-[#ffffff] font-[400]'>{props.genre}</span></h2>
            <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Avaliação: <span className='text-[#ffffff] font-[400]'>{`${props.avalible} / 10`}</span></h2>
            <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Duração: <span className='text-[#ffffff] font-[400]'>{props.duration}</span></h2>
            <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Data de produção: <span className='text-[#ffffff] font-[400]'>{props.date}</span></h2>
            <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Produção: <span className='text-[#ffffff] font-[400]'>{props.production}</span></h2>
          </div>
        </div>

        <FavoriteButton onClick={() => props.saveMovie(props)}/>
    </div>
  );
}
export default InfoMovies;