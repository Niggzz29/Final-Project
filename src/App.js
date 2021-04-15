import './App.css';
import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import { MovieList } from './Components/Movie';
import filmReducer from './Components/filmReducer';
import SearchBox from './Components/Search';
import { MovieHeader } from './Components/Header';
import { Button } from 'reactstrap';

function App() {
  const [state, dispatch] = useReducer(filmReducer, {
    dataTable: { Search: [] },
  });
  const [query, setQuery] = useState("");

  const callAPI = (q = "man") => {
    return axios
      .get(`http://www.omdbapi.com/?s=${q}&apikey=7323142b`)
      .then(({ data }) => data)
      .catch((err) => {
        console.log("error", err);
        dispatch({ type: "getUser", payload: "fwfw" });
      });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    // setQuery(query);
    callAPI(query).then((result) => {
      // console.log("hasil1", result);
      dispatch({ type: "getUser", payload: result });
    });
  }, [query]);

  useEffect(() => {
    callAPI().then((result) => {
      // console.log("hasil1", result);
      dispatch({ type: "getUser", payload: result });
    });
  }, []);

  // console.log("ini hasil fetch", state);

  console.log("state", state);

  return (

    <div className="container-fluid movie-app">
      <div className="row">
        <MovieHeader header="FinProH8" >

          <SearchBox searchValue={query} setQuery={setQuery} />
        </MovieHeader>
      </div>

      <div className="row">
        <h4 className="App-intro">Show your favorite Movies</h4>
        <MovieList dataMovie={state.dataTable.Search} />
      </div>
    </div>
  );
}

export default App;
