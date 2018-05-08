import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers'

import * as firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
 }

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

try {
	firebase.initializeApp(config)
} catch (err) {
	if (!/already exists/.test(err.message)) {
		console.error('Firebase initialization error', err.stack)
	}
}

export const initStore = () => {
    return createStore(reducers, {}, compose(applyMiddleware(thunkMiddleware)))
}