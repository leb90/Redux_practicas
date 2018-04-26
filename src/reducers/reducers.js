import {combineReducers} from 'redux';
import superHeroesR from './superheroes.js'
import tabBarReducer from './tabBarReducer'
import dataReducer from './dataReducer'

export default combineReducers({
  superheroesP: superHeroesR,
  tabId : tabBarReducer,
  dataReducer
})