import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Hero} from "./Components/Hero/Hero"
import Featured from './Components/Featured/Featured';
import Upcoming from './Components/Upcoming/Upcoming';
import Search from './Components/Search/Search';
import Categories from './Components/Categories/Categories';
import Favourites from './Favourites'


function App() {
  const [search,setSearch] = React.useState("");
  const [favourites, setFavourites] = React.useState([])
  
  function handleFavourite(event,movie) {
    let isFound = false;
    favourites.forEach(fav => {
      if (fav.id === movie.id) {
        isFound = true;
       
      }
    })
    if (isFound) {
      deleteFavourite(event,movie);
      event.target.classList.remove("favorite_clicked")
    }
    else {
      const updatedFavorites = [...favourites, movie]
      setFavourites(updatedFavorites)
      event.target.classList.toggle("favorite_clicked")
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  }
  function deleteFavourite(event,movie) {
    const updatedFavorites = favourites.filter(
      favourite => favourite.id !== movie.id
    )
    setFavourites(updatedFavorites)
      event.target.classList.remove("favorite_clicked")
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  return (
    <>
      <Hero value={search} onChange={setSearch}/>
      {search != "" && <Search search={search} addToFavourite={handleFavourite}/> }
      {search == "" && <Upcoming addToFavourite={handleFavourite}/>}
      {search == "" && <Featured addToFavourite={handleFavourite}/>}
      {search == "" && <Categories addToFavourite={handleFavourite}/>}
      <Favourites favorites={favourites} deleteFavourite={deleteFavourite}/>
    </>
  );
}

export default App;
