import React, { useState, useEffect } from "react";
import { getTrending } from "../../api/index";
import {Link, useLocation} from 'react-router-dom'

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setErrorr] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const location = useLocation()



  useEffect(() => {
    setIsLoading(!isLoading)
    getTrending()
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => setErrorr(true))
      .finally(setIsLoading(!isLoading));
  }, []);


  return <div>
      <h1>Trending movies</h1>
      {error && <p>Something is wrong, try again</p>}
      {movies.length>0 && !error && isLoading && <ul>
          {movies.map((el) => 
          <Link key={el.id}
          to={{pathname: `/movies/${el.id}`,
          state: {from: location}}
          }>
          <li>{el.name || el.original_title}</li>
          </Link>)}
          </ul> }
      </div>;
};

export default HomePage;
