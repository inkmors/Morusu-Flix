function CardMovies(props) {
  return (
    <div className="w-[6.5rem] h-[16rem] flex flex-col items-center p-[0.18rem] m-[1rem] md:m-[1.5rem] box-border gap-[2rem] md:w-[13rem] md:h-[25rem]">

        <img className='w-[12rem] h-[10rem] object-cover rounded-inherit border-[##d8a011] rounded-[7px] border-[2px] shadow-[#000000b9] shadow-[0px_5px_15px] md:w-[10rem] md:h-[15rem]' src={props.img} alt={props.alt} />
        
        <div className='w-full flex items-center flex-col box-border px-[0.5rem]'>
            <h2 className='font-[Mulish] text-none hover:underline text-center font-[800] text-[13px] text-[#fff] md:text-[17px]'>{props.link}</h2>
        </div>
    </div>
  )
}

export default CardMovies;
