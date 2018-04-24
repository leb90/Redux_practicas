import {combineReducers} from 'redux';
import superHeroesR from './superheroes.js'

export default combineReducers({
  superheroesP: superHeroesR
})