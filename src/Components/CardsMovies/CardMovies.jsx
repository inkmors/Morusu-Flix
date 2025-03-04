import './CardMovies.css';

function CardMovies(props) {
  return (
    <div className="w-[13rem] h-[20rem] flex flex-col items-center justify-between p-[0.18rem] m-[1.5em] box-border gap-[2rem]">

        <img className='w-[10rem] h-[15rem] object-cover rounded-inherit border-[#f1a707b9] rounded-[7px] border-[2px] shadow-[#000000b9] shadow-[0px_5px_15px]' src={props.img} alt={props.alt} />
        
        <div className='w-full flex items-center flex-col box-border mb-[1.5rem] px-[0.5rem]'>
            <h2 className='font-[Mulish] text-center font-[800] text-[17px] text-[#ffffff]'>{props.link}</h2>
        </div>
    </div>
  )
}

export default CardMovies;
