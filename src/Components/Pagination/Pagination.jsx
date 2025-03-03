import { Link, useParams } from "react-router-dom";

const Pagination = () => {
  const { page } = useParams()
  const currentPage = Number(page) || 1

  return (
    <div className="flex items-center w-full max-w-[80%] justify-center gap-[1.5rem] m-[5rem]">
      {[...Array(6)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <Link key={pageNumber} className={`font-[Mulish] font-[800] flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-[10px] bg-[#f4b315] text-[20px] ${currentPage === pageNumber ? "bg-[#fff] text-[#1a141a]" : "text-[#1a141a]"} 
          no-underline transion-all duration-400 hover:bg-[#fff] hover:text-[#f4b315]`} to={`/movies/${pageNumber}`}>{pageNumber}</Link>
        );
      })}
    </div>
  );
};

export default Pagination;
