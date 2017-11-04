import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  user:{
    nombre: '',
    apellido:'',
    password:'',
    email:'',
    genero:'',
  }
};

const modules = { };
const mutations = {
    saveUser (state, nombre) {
      state.user.nombre=nombre}
 };
const getters = {
  nombre(state, getters){
    return state.user.nombre
  }
 };
const actions = { };

export default new Vuex.Store({
  state,
  modules,
  mutations,
  getters,
  actions,
});
