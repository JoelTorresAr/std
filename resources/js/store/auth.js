import store from './index'
import router from '../routes'
export const auth = {
    state: {
        user: null,
    },
    getters: {
        GET_USER: (state) => {
            return JSON.parse(state.user);
        },
        GET_USER_ID: (state) => {
            let user = JSON.parse(state.user);
            return user.id;
        },
    },
    actions: {
    },
    mutations: {
        SET_USER(state, value) {
            state.user = JSON.stringify(value);
        },
    }
}
