import { BrowserRouter ,Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/home";
import MoviesDetals from "../Pages/MoviesDetals/moviesDetals";
import Error from "../Pages/Error/error";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import LinksPages from "../Components/LinksPages/LinksPages";

function RoutesPages(){

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/moviesdetals/:id" element={<MoviesDetals />} />

                <Route path="*" element={<Error />} />
            </Routes>
            <LinksPages/>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesPages