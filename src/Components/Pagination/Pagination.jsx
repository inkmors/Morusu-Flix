import { Link, useParams } from "react-router-dom";

const Pagination = () => {
  const { page } = useParams()
  const currentPage = Number(page) || 1

  return (
    <div className="flex items-center w-full max-w-[80%] justify-center gap-[2rem] m-[5rem]">
      {[...Array(10)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <Link key={pageNumber} className={`font-[Mulish] font-[500] text-[20px] ${currentPage === pageNumber ? "text-[#ff0]" : "text-[#fff]"} 
          no-underline hover:underline`} to={`/movies/${pageNumber}`}>{pageNumber}</Link>
        );
      })}
    </div>
  );
};

export default Pagination;
