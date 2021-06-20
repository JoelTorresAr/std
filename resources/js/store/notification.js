export const notification = {
    state: {
        notifications: "[]",
        display: true,
        dispatchEvent: null,
    },
    getters: {
        GET_NOTIFICATIONS: (state) => {
            return JSON.parse(state.notifications);
        },
        GET_DISPLAY: (state) => {
            return state.display;
        },
        GET_DISPATCH_EVENT: (state) => {
            return state.dispatchEvent;
        },
    },
    actions: {
        CLEAR_NOTIFICATIONS({ commit }) {
            commit("SET_NOTIFICATIONS", []);
        },
        DISPATCH_EVENT({ commit, dispatch }, value) {
            commit("SET_DISPATCH_EVENT", value);
            commit("SET_REMOVE_NOTIFICATION", value);
        },
        ADD_NOTIFICATION({ commit }, value) {
            commit("SET_ADD_NOTIFICATION", value);
        },
        SWAL_MESSAGE({ commit }, { message, title = "Advertencia!", icon = "warning" }) {
            Swal.fire({
                title: title,
                text: message,
                icon: icon,
                confirmButtonText: "Ok",
            });
        },
    },
    mutations: {
        SET_NOTIFICATIONS(state, value) {
            state.notifications = JSON.stringify(value);
        },
        SET_ADD_NOTIFICATION(state, value) {
            let _notifications = JSON.parse(state.notifications);
            let foundIndex = null;
            let _items = [];
            foundIndex = _notifications.findIndex(
                (x) => x.key === value.key
            );
            if (foundIndex >= 0) {
                _notifications.forEach((element) => {
                    if (element.key === value.key) {
                        _items.push(value);
                    } else {
                        _items.push(element);
                    }
                });
                _notifications = _items;
            } else {
                _notifications.unshift(value);
            }

            state.notifications = JSON.stringify(_notifications);
        },
        SET_DISPLAY(state, value) {
            state.display = value;
        },
        SET_DISPATCH_EVENT(state, value) {
            state.dispatchEvent = value;
        },
        SET_REMOVE_NOTIFICATION(state, value) {
            let foundIndex = -1;
            let _notifications = JSON.parse(state.notifications);
            foundIndex = _notifications.findIndex(
                (x) => x.key === value.key
            );
            if (foundIndex >= 0) {
                _notifications.splice(foundIndex, 1);
                state.notifications = JSON.stringify(_notifications);
            }
        },
    }
    /*this.$store.dispatch("ADD_NOTIFICATION", {
                key: "OrdenesPendientes",
                class: "ordenes-pendientes text--white",
                message: `${_cant} ordenes sin completar en los ultimos 7 dias`,
              });*/
}
