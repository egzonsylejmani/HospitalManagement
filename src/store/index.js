import { createStore } from 'vuex';
import router from '../router';
import { auth } from '../components/firebase/index';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'; 

export default createStore({
  state: {
    user: null,
    error: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    }
  },
  actions: {
    async login({ commit }, details) {
      try {
        const { user } = await signInWithEmailAndPassword(auth, details.email, details.password);
        commit('SET_USER', user);
        commit('CLEAR_ERROR');
        router.push('/');
      } catch (error) {
        let errorMessage = '';
        switch (error.code) {
          case 'auth/user-not-found':
            errorMessage = 'This email is not registered.';
            break;
          case 'auth/wrong-password':
            errorMessage = 'The password is incorrect.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'The email address is invalid.';
            break;
          case 'auth/too-many-requests':
            errorMessage = 'Too many unsuccessful login attempts. Please try again later.';
            break;
          default:
            errorMessage = 'An error occurred while trying to log in. Please try again later.';
            break;
        }
        commit('SET_ERROR', errorMessage);
        throw error;
      }
    },
    async register({ commit }, details) {
      try {
        const { user } = await createUserWithEmailAndPassword(auth, details.email, details.password);
        commit('SET_USER', user);
        commit('CLEAR_ERROR');
        router.push('/');
      } catch (error) {
        let errorMessage = '';
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'This email is already in use. Please choose a different email or sign in.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'The email address is invalid. Please enter a valid email address.';
            break;
          case 'auth/weak-password':
            errorMessage = 'The password is too weak. Please enter a stronger password.';
            break;
          default:
            errorMessage = 'An error occurred while trying to register. Please try again later.';
            break;
        }
        commit('SET_ERROR', errorMessage);
        throw error;
      }
    },
    async logout({ commit }) {
      try {
        await signOut(auth);
        commit('CLEAR_USER');
        router.push('/login');
      } catch (error) {
        commit('SET_ERROR', error.message);
      }
    },
    fetchUser({commit}) {
      auth.onAuthStateChanged(async user => {
        if(user === null){
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)

          if(router.isReady() && router.currentRoute.value.path =='/login'){
            router.push('/')
          }
        }
      })
    }
  }
})
