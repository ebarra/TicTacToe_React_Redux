import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import turnReducer from './turnReducer';
import movesReducer from './movesReducer';
import winnerReducer from './winnerReducer';

const GlobalState = combineReducers({
    turn: turnReducer,
    values: gameReducer,
    moves: movesReducer,
    winner: winnerReducer
});

export default GlobalState;