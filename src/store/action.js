export default {
    addRoutePath({ commit }, routename) {
        commit('CHANGEROUTE_PATH', routename);
    },
    getUserName({ commit }, name) {
        commit('GETUSERNAME',name)
    }
}