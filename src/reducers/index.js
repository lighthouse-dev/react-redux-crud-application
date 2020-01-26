// 前Reducerを結合する役割をする
import { combineReducers } from 'redux';
import count from './count';

export default combineReducers({ count });
