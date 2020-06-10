import React, { useState, useEffect, Suspense, lazy } from "react";
import { searchMovie } from "../../api/index";
import queryString from "query-string";
import { useLocation, useHistory, Link, Switch, Route } from "react-router-dom";
import style from './Movie.module.css'

const MoviePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [listOfFilms, setListOfFilms] = useState([]);

  const Detales = lazy(() => import('../MovieDatailesPage/MovieDetailsPage'))

  const location = useLocation();
  const history = useHistory();

  const searchFilm = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitFilm = (e) => {
    e.preventDefault();
    searchMovie(searchValue)
      .then((res) => setListOfFilms(res.data.results))
      .finally(setSearchValue(""));
    history.push({ ...location, search: `?query=${searchValue}` });
  };

  useEffect(() => {
    if (!location.search) {
      setListOfFilms([]);
      return;
    }
    const place = queryString.parse(location.search).query;
    searchMovie(place).then((res) => setListOfFilms(res.data.results));
  }, [location.search]);



  return (
    <div className={style.frame}>
      <form onSubmit={onSubmitFilm}>
        <input
          type="text"
          value={searchValue}
          placeholder="Type the name of film"
          onChange={searchFilm}
          className={style.movieInput}
        />
        <button>Search</button>
      </form>

      <ul>
        {listOfFilms.length > 0 &&
          listOfFilms.map((el) => { return (
            <Link to={{ pathname: `/movies/${el.id}`, state: {from: location} }} key={el.id}>
              <li key={el.id}>{el.title || el.name}</li>
            </Link>
        
          )})}
      </ul>
      <Suspense fallback={<p>...Loading</p>}>
      <Switch>
            <Route path={'/movies/:moviesID'} component={Detales}/>
        </Switch>
      </Suspense>
    </div>
  );
};

export default MoviePage;
