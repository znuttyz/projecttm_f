import * as firebase from 'firebase';
import {
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER_CHECK,
	LOGOUT_USER_SUCCESS,
} from './types';

export const loginUser = (username, password) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER })
		firebase.auth().signInWithEmailAndPassword(username, password)
		.then(function(user) {
			dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
			window.location = "/admin/banner"
		})
		.catch(function(error) {
			dispatch({ type: LOGIN_USER_FAIL })
		});
	};
};

export const loginUserCheck = (path = null) => {
	return (dispatch) => {
		firebase.auth().onAuthStateChanged(function(user) {
		  	if (user) {
			    // User is signed in.
			    dispatch({ type: LOGIN_USER_CHECK, payload: user })
		  	} else if (path === "login") {
		  		// Do nothing
		  	} else {
			    // User is signed out.
			    window.location = "/"
			}
		});
	}
}

export const logoutUser = () => {
	return (dispatch) => {
		firebase.auth().signOut().then(() => {
			dispatch({ type: LOGOUT_USER_SUCCESS })
			window.location = "/admin"
		})
		.catch((error) => {
			console.log(error)
		})
	}
}