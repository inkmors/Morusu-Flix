
function LineAlign(props) {
    return (
      <div className="w-full max-w-[90%] flex items-center justify-around mb-[1rem] md:mb-[5rem]">
        <hr className="w-full border border-[#d8a011] border-solid" />
        
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-extrabold text-center whitespace-nowrap font-[Mulish] text-white px-2">{props.title}</h2>
        
        <hr className="w-full border border-[#d8a011] border-solid" />
      </div>

    )
}


export default LineAlign