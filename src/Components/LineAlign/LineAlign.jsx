function LineAlign(props) {
    return (
        <div className="w-full max-w-[90%] flex items-center justify-around mb-15">
            <hr className="w-full border-1 border-[#d8a011] border-solid"/>
            <h2 className="text-[25px] font-[800] text-center w-170 font-[Mulish] text-[#fff]">{props.title}</h2>
            <hr className="w-full border-1 border-[#d8a011] border-solid"/>
      </div>
    )
}

export default LineAlign