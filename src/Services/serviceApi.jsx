import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api

// 2a1233e63324b80405a51d9575fc5937

// 20250226182153
// https://api.themoviedb.org/3
// https://api.themoviedb.org/3/movie/550?api_key=2a1233e63324b80405a51d9575fc5937