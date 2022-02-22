export default {
    addRoutePath({ commit }, routename) {
        commit('CHANGEROUTE_PATH', routename);
    }
}