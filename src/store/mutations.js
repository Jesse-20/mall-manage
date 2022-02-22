const CHANGEROUTE_PATH = 'CHANGEROUTE_PATH'
export default {
    [CHANGEROUTE_PATH](state,routename) {
        state.routepath = routename;
    }
}