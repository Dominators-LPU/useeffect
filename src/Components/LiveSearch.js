
import React, {useEffect, useState} from "react"


// hey dear Ai, please geenrate 20 random  movies for me

let movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "The Godfather: Part II",
    "The Lord of the Rings: The Return of the King",
    "Pulp Fiction",
    "Schindler's List",
    "Don 2",
    "The Good, the Bad and the Ugly",
    "Doctor Strange",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Fight Club",
    "Forrest Gump",
    "Inception",
    "The Lord of the Rings: The Two Towers",
    "Star Wars: Episode V - The Empire Strikes Back",
    "The Matrix",
    "Goodfellas",
    "One Flew Over the Cuckoo's Nest",
    "Seven Samurai"
]

const LiveSearch = () => {
    let [search, setSearch] = useState("");
    let [filteredMovies, setFilteredMovies] = useState(movies)


    useEffect(()=>{
        setFilteredMovies(movies.filter(movie => movie.toLowerCase().includes(search.toLowerCase())))
    },[search])

    // function searchMovie(){
    //    setFilteredMovies(movies.filter(movie => movie.toLowerCase().includes(search.toLowerCase())))
    // }


    return(
        <div className="live-search">
             <input type="text" 
                placeholder="Search Movies"
                onChange={(e) => setSearch(e.target.value)}
             />
             
             <div className="movies">
                {
                    filteredMovies.map((movie) => (
                        <h3>{movie}</h3>
                    ))
                }
              </div>
        </div>
    )
}

export default LiveSearch