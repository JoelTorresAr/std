export const lab = {
    state: {
        paciente: null,
        pruebaOrden: null,
        examenesOrden: null,
    },
    getters: {
        GET_PACIENTE: (state) => {
            return JSON.parse(state.paciente);
        },
        GET_PRUEBA_ORDEN: (state) => {
            return state.pruebaOrden;
        },
        GET_EXAMENES_ORDEN: (state) => {
            return JSON.parse(state.examenesOrden);
        },
    },
    actions: {
    },
    mutations: {
        SET_PACIENTE(state, value) {
            state.paciente = JSON.stringify(value);
        },
        SET_PRUEBA_ORDEN(state, value) {
            state.pruebaOrden = value;
        },
        SET_EXAMENES_ORDEN(state, value) {
            state.examenesOrden = JSON.stringify(value);
        },
    }
}
