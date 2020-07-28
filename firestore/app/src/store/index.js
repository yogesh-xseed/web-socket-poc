import Vue from "vue";
import Vuex from "vuex";
import firebase from "@firebase/app";
import Axios from "axios";
import "@firebase/firestore";
Vue.use(Vuex);
firebase.initializeApp({
  apiKey: "AIzaSyAX9k03Drt1YuEezM3xszU2Z-_bdSetg4E",
  authDomain: "practice-session-poc.firebaseapp.com",
  databaseURL: "https://practice-session-poc.firebaseio.com",
  projectId: "practice-session-poc",
  storageBucket: "practice-session-poc.appspot.com",
});
let db = firebase.firestore();

export default new Vuex.Store({
  state: { practiceSession: { data: {} } },
  mutations: {
    SET_DATA(state, data) {
      state.practiceSession = data;
    },
  },
  actions: {
    async getData({ commit }) {
      let response = await Axios.post("http://localhost:3001/postdata");
      let id = response.data;
      db.collection("practice-session")
        .doc(id)
        .onSnapshot((doc) => {
          let data = doc.data();
          if (data) {
            commit("SET_DATA", { id, data });
          }
        });
    },
    incrementState({ state }, data) {
      let id = state.practiceSession.id;
      db.collection("practice-session")
        .doc(id)
        .set(data);
    },
  },
  modules: {},
});
