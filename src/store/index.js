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
        commit('SET_ERROR', error.message);
      }
    },
    async register({ commit }, details) {
      try {
        const { user } = await createUserWithEmailAndPassword(auth, details.email, details.password);
        commit('SET_USER', user);
        commit('CLEAR_ERROR');
        router.push('/');
      } catch (error) {
        commit('SET_ERROR', error.message);
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
