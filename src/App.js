import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import HomePage from './Components/HomePage/HomePage'
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

// const Home = lazy(() => import('./Components/HomePage/HomePage'))
const Search = lazy(() => import ('./Components/MoviePage/MoviePage'))
const Detales = lazy(() => import ('./Components/MovieDatailesPage/MovieDetailsPage'))

function App() {
  return (
    <div >
      <Navigation/>
      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path='/search' component={Search}/>
        <Route path='/movies/:movieId'component={Detales}/>

        </Switch>

      </Suspense>
      
     
    </div>
  );
}

export default App;
