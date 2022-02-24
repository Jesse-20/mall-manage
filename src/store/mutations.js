const CHANGEROUTE_PATH = 'CHANGEROUTE_PATH'
const GETUSERNAME = 'GETUSERNAME'
export default {
    [CHANGEROUTE_PATH](state,routename) {
        state.routepath = routename;
    },
    [GETUSERNAME](state, name) {
        state.username = name;
    }
}