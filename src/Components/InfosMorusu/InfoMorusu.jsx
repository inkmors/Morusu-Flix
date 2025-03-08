function InfoMorusu(){
    return(
        <div className="flex flex-col md:flex-row items-center justify-between max-w-full md:max-w-[90%] lg:max-w-[80%] md:max-w-[60%] mb-12 md:mb-12 px-4">
          <div className="max-w-[80%] flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-[Mulish] font-extrabold text-3xl md:text-[46px] text-[#f4b315] max-sm:text-[26px]  max-sm:mb-[1rem]">🍿 FIQUE POR DENTRO AGORA MESMO!</h1>

            <h2 className="font-[Josefinsans] font-light text-lg md:text-[30px] text-white mt-2 max-sm:text-[14px]">NAS NOVIDADES DOS <span className="text-[#f4b315]">FILMES</span> E <span className="text-[#f4b315]">SÉRIES</span> COM A <strong className="font-extrabold"><span className="text-[#f4b315]">MORUSU</span>FLIX!!</strong></h2>
          </div>

          <img className="w-20 md:w-[9rem] mt-4 md:mt-0 md:ml-[4rem] max-sm:flex-none" src="/assets/icons8-abelha-96.png" alt="Logo" />
      </div>
    )
}

export default InfoMorusu