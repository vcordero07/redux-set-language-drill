import store from './store';
import {setLanguage} from './actions';

// Should output {language: 'SP'}
console.log(store.getState());
// Switch to German
store.dispatch(setLanguage('PT'));
// Should output {language: 'PT'}
console.log(store.getState());
