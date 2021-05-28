import {createStore} from 'redux';
import {reducer} from '../featuers/reducer';

export let store = createStore(reducer)