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

                {/* Funcionalidades futuras */}
                {/* <Route path="/acao" element={<acao />} />
                <Route path="/aventura" element={<aventura />} />
                <Route path="/animacao" element={<animacao />} />
                <Route path="/suspense" element={<suspense />} />
                <Route path="/drama" element={<drama />} />
                <Route path="/terror" element={<terror />} />
                <Route path="/romance" element={<romance />} />
                <Route path="/comedia" element={<comedia />} /> */}

                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesPages