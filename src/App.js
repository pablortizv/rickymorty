import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios';
import CardCharacter from './views/cardCharacter/cardCharacter';
import { addCharactersAction } from './state/actions';
import CharacterInfo from './views/characterInfo/characterInfo';
import Header from './components/header/header';
import ErrorPage from './views/404/404';
import './css/App.css';


function App() {
  const characters = useSelector((state)=> state.characters)
  const dispatch = useDispatch();

  useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        var characterList = response.data.results;
        dispatch(addCharactersAction([...characterList]));
      })
      .catch(e => {
      })
    }, []);

  return (
    <div>
        
        <Router>
          <Header/>
          <Switch>
            <Route path='/' exact >
              <CardCharacter cards={characters}/>
            </Route>
            <Route path="/info/:id" exact>
              <CharacterInfo/>
            </Route>
            <Route component={()=>(<ErrorPage/>)}/>
          </Switch>
        </Router>
        
      <br/>
    </div>
  );
}

export default App;
