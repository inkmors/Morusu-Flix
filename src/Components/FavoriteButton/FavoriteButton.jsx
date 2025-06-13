
function FavoriteButton({ onClick }){
    return(
        <button onClick={onClick} className='bg-[#f4b315] text-[#1a141a] p-[0.6rem] rounded-[5px] font-[Josefinsans] font-[800] text-[20px] no-underline cursor-pointer transion-all duration-400 hover:bg-[#ffffff]'>👍 Adicionar aos favoritos</button>
    )}

export default FavoriteButton