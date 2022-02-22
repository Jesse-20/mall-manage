import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
    routepath:[],
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
})