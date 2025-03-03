import { BrowserRouter ,Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/home";
import MoviesDetals from "../Pages/MoviesDetals/moviesDetals";
import Favorites from "../Pages/Favorites/favorites";
import Error from "../Pages/Error/error";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


function RoutesPages(){

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Home />} />
                <Route path="/movies/:page" element={<Home />} />
                <Route path="/moviesdetals/:id" element={<MoviesDetals />} />
                <Route path="/favorites" element={<Favorites />} />

                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesPages