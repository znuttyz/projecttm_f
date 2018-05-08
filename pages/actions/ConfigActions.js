import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'

import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FB_APIKEY,
    authDomain: process.env.FB_AUTHDOMAIN,
    databaseURL: process.env.FB_DATABASEURL,
    projectId: process.env.FB_PROJECTID,
    storageBucket: process.env.FB_STORAGEBUCKET,
    messagingSenderId: process.env.FB_MESSAGINGSENDERID
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