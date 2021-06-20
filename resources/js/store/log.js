export const log = {
    state: {
        logs: "[]",
        display: true,
        dispatchEvent: null,
    },
    getters: {
        GET_LOGS: (state) => {
            return JSON.parse(state.logs);
        },
    },
    actions: {
        STORE_LOG({ commit, dispatch }, value) {
            commit("SET_ADD_LOG", value);
            dispatch("DISPATCH_LOGS")
            //setTimeout(function() {  }, 7000)

        },
        DISPATCH_LOGS({ getters, commit, dispatch }) {
            let _logs = getters.GET_LOGS;
            let _sent = false;
            var tick = function () {
                if (_logs.length > 0 && _sent === false) {
                    axios
                        .post("/api/log/store/disconnected", {
                            logs: _logs
                        })
                        .then(({ data }) => {
                            if (data.status == "200") {
                                commit("SET_LOGS", []);
                                _sent = true;
                                clearInterval(interval);
                            }
                        })
                        .catch((error) => {
                            if (error.response) {
                                clearInterval(interval);
                            }
                        })
                        .finally(() => {
                            //console.log('fallo inserción')
                        });
                } else {
                    clearInterval(interval);
                }
            };
            var interval = setInterval(
                (function (self) {
                    return function () {
                        tick.call(self);
                    };
                })(this),
                1000*60
            );

            tick.call(this);

            return {
                abort: function () {
                    clearInterval(interval);
                }
            };
        },
    },
    mutations: {
        SET_LOGS(state, value) {
            state.logs = JSON.stringify(value);
        },
        SET_ADD_LOG(state, value) {
            let _logs = JSON.parse(state.logs);
            _logs.push(value);
            state.logs = JSON.stringify(_logs);
        },
    }
}
 //this.$store.dispatch("STORE_LOG", {dateTime: new Date().toISOString(),log: error, idEmpleado: id});
