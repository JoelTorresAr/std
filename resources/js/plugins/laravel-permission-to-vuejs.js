import store from '../config/store/'
export default {
    install(Vue, options) {
        Vue.prototype.barItem = function (value) {
            const ObPermissions = store.getters.GET_ITEMS;
            var permissions = [];
            for (var i = 0; i < ObPermissions.length; i++) {
                permissions.push(ObPermissions[i].ClaveItem)
            }
            // var jsPermissions = localStorage.getItem("permissions")
            var _return = false;
            if (value.trim() === "specialItem") {
                return true;
            }
            if (!Array.isArray(permissions)) {
                return false;
            }
            if (value.includes('|')) {
                value.split('|').forEach(function (item) {
                    if (permissions.includes(item.trim())) {
                        _return = true;
                    }
                });
            } else if (value.includes('&')) {
                _return = true;
                value.split('&').forEach(function (item) {
                    if (!permissions.includes(item.trim())) {
                        _return = false;
                    }
                });
            } else {
                _return = permissions.includes(value.trim());
            }
            return _return;
        }

        Vue.prototype.barGroup = function (value) {
            const roles = store.getters.GET_GROUPS;
            var _return = false;
            if (!Array.isArray(roles)) {
                return false;
            }
            if (value.includes('|')) {
                value.split('|').forEach(function (item) {
                    if (roles.includes(item.trim())) {
                        _return = true;
                    }
                });
            } else if (value.includes('&')) {
                _return = true;
                value.split('&').forEach(function (item) {
                    if (!roles.includes(item.trim())) {
                        _return = false;
                    }
                });
            } else {
                _return = roles.includes(value.trim());
            }
            return _return;
        }
        Vue.prototype.cargos = function (value) {
            const cargos = store.getters.GET_CARGOS;
            var _return = false;
            if (!Array.isArray(cargos)) {
                return false;
            }
            if (value.includes('|')) {
                value.split('|').forEach(function (item) {
                    if (cargos.includes(item.trim())) {
                        _return = true;
                    }
                });
            } else if (value.includes('&')) {
                _return = true;
                value.split('&').forEach(function (item) {
                    if (!cargos.includes(item.trim())) {
                        _return = false;
                    }
                });
            } else {
                _return = cargos.includes(value.trim());
            }
            return _return;
        }
        Vue.prototype.can = function (clave, accion) {
            const ObPermissions = store.getters.GET_ITEMS;
            var _return = false;
            for (var i = 0; i < ObPermissions.length; i++) {
                if (ObPermissions[i].ClaveItem === clave && ObPermissions[i][accion]) {
                    _return = true;
                    break;
                }
            }
            return _return;
        }
        Vue.prototype.canReportItem = function (value) {
            const report_permissions = store.getters.GET_REPORT_PERMISSIONS;
            var _return = false;
            for (var i = 0; i < report_permissions.length; i++) {
                if (report_permissions[i].IdMenuReporte === value.toUpperCase()) {
                    _return = true;
                    break;
                }
            }
            return _return;
        }
        Vue.prototype.canReportGroup = function (value) {
            const report_permissions = store.getters.GET_REPORT_PERMISSIONS;
            var _return = false;
            for (var i = 0; i < report_permissions.length; i++) {
                if (report_permissions[i].MODULO === value) {
                    _return = true;
                    break;
                }
            }
            return _return;
        }
    }
}
