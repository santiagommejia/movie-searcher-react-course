import { useState } from "react"

export const AppSearch = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchMovies()
  }
  const fetchMovies = async () => {
    const baseUrl = 'https://api.themoviedb.org/3/search/movie';
    try {
      const apiKey = import.meta.env.VITE_MOVIE_SEARCH_API_KEY;
      const response = await fetch(`${baseUrl}?query=${search}&api_key=${apiKey}`)
      const data = await response.json();
      setMovies(data.results)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }
  return (
    <div className="container">
      <h1 className="title">Movie Searcher</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a movie..." value={search} onChange={handleInputChange} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movie-list">
        {movies.map((movie: any) => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
