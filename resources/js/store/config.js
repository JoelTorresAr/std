export const config = {
    state:{
        VueEnv: 'development',
        LaravelEnv: 'local',
    },
    getters:{
        GET_ENV_VUE: (state)=>{
            return state.VueEnv;
        },
        GET_ENV_LARAVEL: (state)=>{
            return state.LaravelEnv;
        },
    },
    actions:{},
    mutations:{
        SET_ENV_VUE(state, value) {
            state.VueEnv = value;
        },
        SET_ENV_LARAVEL(state, value) {
            state.LaravelEnv = value;
        },
    }
}
