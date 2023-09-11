import './App.css';
import Result from './component/Result';
import axios from 'axios';
import { useEffect, useState } from 'react';
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
 

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  // search handler 
const changeTheSearch = (e) =>{
  console.log(e.target.value);
  setSearch(e.target.value);    
}

// get movie handler apis
  const getAllMovies = () => {
    axios.get(APIURL)
    .then(
      (resolved) => {
        console.log(resolved.data.results)
        setMovies(resolved.data.results) ;
      }
    ) 
    .catch(
      (error) => {
        console.log('failed');
      }
    )
  }

  //get search movie api
  const getSearchedMovies = () =>{
    axios.get(SEARCHAPI + search)  
    .then(
      (resolved) => {
        console.log(resolved.data.results)
        setMovies(resolved.data.results) ;
      }
    ) 
    .catch(
      (error)=>{
        console.log(error)
      }
    ) 
  }


useEffect(
  () => {
    setMovies([]);
  if(search === ''){
    getAllMovies();
  } else{
     getSearchedMovies();
  }
  },
  [search]
)

  return (
    <div className="App">
     
     <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
      <input type="search" value={search} onChange={changeTheSearch} className='w-full border border-black rounded text-slate-400 p-4'/>
     {
      movies.length === 0 
      ? <div className='text-3xl text-center mt-2'> Loading... </div> 
      :<Result movies={movies}/>    
     }
      
     </div>

    </div>
  );
}

export default App;
