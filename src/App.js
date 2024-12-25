import React from 'react'
import Header from './Header'
import { useState } from 'react'
import "./App.css"
import Landing from './Landing'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import SelectedMovie from './SelectedMovie'
import SearchMovies from './SearchMovies'
import Cast from './Cast'
import SignIn from './SignIn'
import Movies from './Movies'
import Shows from './Shows'
import SelectedSeries from './SelectedSeries'

function App() {
  let [isClicked, setIsClicked] = useState(false)
  let [userName , setUserName]  = useState("")
  const moviekey = "d22bf07acb8f59af1b43fecbc641c4d9";

  return (
    <div className='main-container'>
      <BrowserRouter>
      
      <Header/>
      <Routes>
        <Route path='/' element = {<Landing/>} />

      <Route path ="/:movieName/:movieId"  element = {<SelectedMovie/>}  />
      <Route path ="/movies/:movieName/:movieId"  element = {<SelectedMovie/>}  />
      <Route path='/searchMovie' element = {<SearchMovies/>} />
      <Route path='/searchMovie/:movieName/:movieId' element ={<SelectedMovie/>}  />
      <Route path='/:movieName/:movieId/:castId' element = {<Cast/>}/>
      <Route path='/searchMovie/:movieName/:movieId/:castId' element = {<Cast/>}/>
      <Route path='/signin' element = {<SignIn
      isClicked = {isClicked}
      setIsClicked = {setIsClicked}
      userName = {userName}
      setUserName = {setUserName}
      
      />} />
      <Route path='/movies' element = {<Movies
      moviekey={moviekey}
      />}  />
      <Route path='/series' element = {<Shows
      moviekey={moviekey}
      />}  />
      <Route path='/series/:seriesName/:SeriesId' element = {<SelectedSeries/>}/>
      

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
