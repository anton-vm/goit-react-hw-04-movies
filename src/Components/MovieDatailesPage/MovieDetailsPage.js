import React, { useState, useEffect, lazy, Suspense } from "react";
import { getMovieDetales, posterUrl } from "../../helpers/index";
import {Link, Switch, Route, useLocation, useHistory} from 'react-router-dom'
import Cast from "../Cast/Cast"
import style from './Detales.module.css'

// const Cast = lazy(() => import("../Cast/Cast"));
const Review = lazy(() => import('../Review/Review'));

const MovieDetailsPage = (props) => {
  const [detales, setDetales] = useState({});
  const [error, setError] = useState(false);

  const movieId = props.match.params.movieId;
  const location = useLocation();
  const history = useHistory()

  useEffect(() => {
    getMovieDetales(movieId)
      .then((movie) => setDetales(movie.data))
      .catch((err) => setError(true));
  }, []);



  const goBack =() => {
      history.push({...location.state.from})
  }


  const {
    poster_path,
    title,
    name,
    vote_average,
    overview,
    genres
  } = detales

  

  return ( <div className = {style.frame}>
      <button onClick={goBack} className={style.movieBtn}>Go back</button>
      {error && <p>Somethhing is wrong</p>}
      {detales.genres &&
      <article className={style.movieFrame}>
          <div>
              <img src={`${posterUrl}${poster_path}`} alt={`${title}`} className={style.movieImg}/>
          </div>

          <div>
      <h2>{title || name}</h2>
      <p>User score: {`${vote_average*10} %`}</p>
      <h3>Overview</h3>
      <p>{overview}</p>

      <h3>Genres</h3>
      <div className={style.movieGenres}>   
      {genres.map((el) => (<p key={el.id}>{el.name},</p>))}
      </div> 
        </div>
      </article>
      }
      <section>
          <h3>Additional information</h3>
          <ul>
      <Link to= {{pathname: `/movies/${movieId}/cast`, state: {from: location}}}>
          <li>Cast</li>
      </Link>
      <Link to={{pathname: `/movies/${movieId}/review`, state: {from: location}}}><li>Review</li></Link>
      </ul>
      {/* <Suspense fallback={<p>...Loading</p>}> */}
          <Switch>
              <Route  path={`${props.match.path}/cast`} component={Cast}/>;
              <Route  path={`${props.match.path}/review`} component={Review}/>
          </Switch>
      {/* </Suspense> */}

      </section>




  </div> )

};

export default MovieDetailsPage;
