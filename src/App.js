
import './App.css';

import { useState } from "react";


const movieCollection = {
  Comedy: [
    {
      name: "PK",
      year: 2009,
      Rating: 8.4
    },
    {
      name: "dhamal",
      year: 2000,
      Rating: 8.1
    },
    {
      name: "chup chup ke",
      year: 2005,
      Rating: 8
    }
  ],
  Action: [
    {
      name: "ironman",
      year: 2022,
      Rating: 9
    },
    {
      name: "action jacktion",
      year: 2022,
      Rating: 8.8
    },
    {
      name: "avatar",
      year: 2022,
      Rating: 8.7
    }
  ],
  Romance: [
    {
      name: "2 state",
      year: 2004,
      Rating: 9.4
    },
    {
      name: "half girlfriend",
      year: 1997,
      Rating: 8.1
    },
    {
      name: "ashiki",
      year: 2010,
      Rating: 8
    }
  ]
};




function App() {

  const [movie, setMovie] = useState(movieCollection.Comedy)
  const [category, setCategory] = useState("Comedy")


  const movieList = Object.keys(movieCollection)
  const moviesInfo = Object.values(movieCollection)

  function getMovieList(genre) {
    setCategory(genre);
    setMovie(movieCollection[genre]);
  }
  return (
    <div className="App">
      <h1>some best movie recommendation for you🎞😍</h1>
      <div className='genre'>

        {
          movieList.map((genre) => {
            return (

              <button key={genre} className={genre == category ? "active" : "btn-bg"}
                onClick={() => getMovieList(genre)}>
                {genre}
              </button>

            )
          })
        }

      </div>
      <br />
      <hr />
      <div className='movies'>
        <h2> Selected Genre : {category}</h2>
        {
          movie.map((item) => {
            return (
              <div className='movie-items'>
                <h3 key={item.name}>{item.name}- (year : <span>{item.year})</span></h3>
                <h4>{item.Rating}/10</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
