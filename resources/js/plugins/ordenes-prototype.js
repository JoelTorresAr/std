export default {
    install(Vue, options) {
        Vue.prototype.verificarInputsExamen = function (examen) {
            var _return = false;
            let _pruebas = examen.pruebas;
            _pruebas.forEach(element => {
                if (element.Resultado == "") {
                    element.Resultado = null;
                }
                if (element.Resultado != null) {
                    _return = true;
                }
            });
            return _return;
        }
        Vue.prototype.formatRefDet = function (ref) {
            let _msg = "";
            switch (ref.tipo) {
                case "rango":
                    _msg = `${ref.id}: ${ref.min} - ${ref.max}`;
                    break;
                case "menorQue":
                    _msg = `${ref.id}: < ${ref.max}`;
                    break;
                case "mayorQue":
                    _msg = `${ref.id}: ${ref.min} <`;
                    break;
                default:
                    _msg = `error en el formateo`;
                    break;
            }
            return _msg;
        }
    }
}
