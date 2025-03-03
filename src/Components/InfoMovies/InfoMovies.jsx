import './InfoMovies.css';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function InfoMovies(props) {
  return (
    <div className="w-full max-w-[74rem] flex flex-row items-start justify-between mb-[10rem] mt-[5rem]">
        <div className='w-full max-w-[40rem] flex items-center flex-col box-border justify-center gap-[2rem]'>
          <img className='w-[30rem] h-[35rem] object-cover rounded-[15px] border-[#f4b315] border-[2px]' src={props.img} alt={props.alt} />
          <FavoriteButton/>
        </div>

        <div className='w-full flex flex-col items-start max-w-[35rem] gap-[1rem] p-[1rem]'>
          <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Título: <span className='text-[#ffffff] font-[400]'>{props.title}</span></h2>
          <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Sinopse: <span className='text-[#ffffff] font-[400]'>{props.overview}</span></h2>
          <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Gênero: <span className='text-[#ffffff] font-[400]'>{props.genre}</span></h2>
          <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Avaliação: <span className='text-[#ffffff] font-[400]'>{`${props.avalible.toFixed(1)} / 10`}</span></h2>
          <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Duração: <span className='text-[#ffffff] font-[400]'>{props.duration} minutos</span></h2>
          <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Data de produção: <span className='text-[#ffffff] font-[400]'>{props.date}</span></h2>
          <h2 className='font-[Mulish] text-[24px] text-[#f4b315] font-[800]'>Produção: <span className='text-[#ffffff] font-[400]'>{props.production}</span></h2>
        </div>
    </div>
  );
}

// Nome
// photo
// avalible
// sinopse
// link trailler
// genero
// duracao
// ano
// producao

// function CardMovies(props) {
//   return (
//     <a href={props.link} className="container-card">
//         <img src={props.img} alt={props.alt} />
//         <div className='alignTitleCard'>
//             <div className='titleCardAvalible'>
//                 <h2>{props.title}</h2>
//                 <h3>Classificação: {props.avalible.toFixed(1)}</h3>
//             </div>
            
//         </div>
//     </a>
//   );
// }

export default InfoMovies;