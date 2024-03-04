import { useEffect, useState } from "react";

const MovieData = ({ searchTxt }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://swapi.dev/api/films/?format=json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data.results); // SWAPI returns results array
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    // Filter movies based on search text
    const filteredMovies = posts.filter((movie) =>
        movie.title.toLowerCase().includes(searchTxt.toLowerCase())
    );

    // Return JSX to render filtered movies
    return (
        <div>
            {/* Map over filtered movies to render each movie */}
            {filteredMovies.map((movie) => (
                <MovieCard key={movie.episode_id} movie={movie} />
            ))}
        </div>
    );
};

const MovieCard = ({ movie }) => {
    return (
        <div className="card">
            <h3>Title: {movie.title}</h3>
            <p>Director: {movie.director}</p>
        </div>
    );
};

const Body = () => {
    const [searchTxt, setSearchTxt] = useState("");

    
    const handleSearch = () => {
        // Filter movies based on the search text
        const filtered = posts.filter((movie) =>
            movie.title.toLowerCase().includes(searchTxt.toLowerCase())
        );
        setFilteredMovies(filtered);
    };

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="searchbar"
                    placeholder="search"
                    value={searchTxt}
                    onChange={(e) => setSearchTxt(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            
            <div className="Movie-Card">
                <MovieData searchTxt={searchTxt} />
            </div>
        </>
    );
};

export default Body;
