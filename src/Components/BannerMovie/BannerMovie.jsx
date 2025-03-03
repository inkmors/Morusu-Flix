
function BannerMovies(props) {
    return (
        <div className="w-full max-w-[90%] h-[25rem] flex items-center justify-center bg-[#000] rounded-[10px] overflow-hidden mb-[4rem] border-[#fff] border-[2px]">
            <img className="w-full h-full object-cover object-top rounded-[10px]" 
            src={`https://image.tmdb.org/t/p/original/${props.bannerMovie}`} alt="filme1"/>
        </div>

    )
}

export default BannerMovies