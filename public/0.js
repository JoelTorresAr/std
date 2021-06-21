(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavegationDraweLeft_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavegationDraweLeft.vue */ "./resources/js/layouts/NavegationDraweLeft.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    navegationDrawerLeft: _NavegationDraweLeft_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["user"],
  data: function data() {
    return {
      clipped: false,
      returnPassForm: false,
      showReports: false,
      showPassForm: false,
      VueEnv: "development",
      LaravelEnv: "local",
      drawer: false,
      fixed: false,
      noAction: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "JOEL TORRES FARRO",
      ReportGroups: [{
        icon: "mdi-file-pdf",
        clave: "ARCHIVO CLINICO",
        title: "Arch.Clin.",
        color: "red darken-4",
        items: [{
          icon: "mdi-file-pdf",
          title: "Citas Solicitadas",
          to: {
            name: "report-hc-solicitudes"
          },
          clave: "ID_HCSOLICPORSERV",
          color: ""
        }]
      }, {
        icon: "mdi-file-pdf",
        clave: "LABORATORIO",
        title: "Laboratorio",
        color: "",
        items: [{
          icon: "mdi-file-pdf",
          title: "Resultados por Servicios",
          to: {
            name: "laboratorio.reportes.grupo.pruebas"
          },
          clave: "ID_LabTipoAnalisisResultados",
          color: ""
        }, {
          icon: "mdi-file-pdf",
          title: "Producion por Área",
          to: {
            name: "laboratorio.reportes.produccion.area"
          },
          clave: "ID_LabProduccion",
          color: ""
        }]
      }]
    };
  },
  mounted: function mounted() {
    /*this.$store.commit("SET_ADD_NOTIFICATION", {
          cant: 8,
          message: "Tienes ordenes pendientes",
        });*/
    var userEx = this.$store.getters.GET_USER;
    this.title = "".concat(userEx.name, " ").concat(userEx.apellido_paterno, " ").concat(userEx.apellido_materno);
    this.title = this.title.toUpperCase();
    this.VueEnv = this.$store.getters.GET_ENV_VUE;
    this.LaravelEnv = this.$store.getters.GET_ENV_LARAVEL;
  },
  methods: {
    update: function update() {
      axios.get("/cache/clear").then(function (response) {})["catch"](function (error) {//console.log(error.config);
      })["finally"](function () {
        window.location.reload(true);
      });
    },
    logout: function logout() {
      var crsfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
      window.axios.defaults.headers.common["X-CSRF-TOKEN"] = crsfToken;
      axios.post("/logout").then(function (response) {
        location.reload(true);
      })["catch"](function (error) {
        console.log(error.config);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/NavegationDraweLeft.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/NavegationDraweLeft.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_groups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/groups */ "./resources/js/layouts/config/groups/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["drawer", "miniVariant", "clipped", "noAction"],
  data: function data() {
    return {
      grupos: []
    };
  },
  computed: {
    drawerLeft: {
      get: function get() {
        return this.drawer;
      },
      set: function set(val) {
        this.$emit("update:drawer", val);
      }
    }
  },
  created: function created() {
    this.grupos = _config_groups__WEBPACK_IMPORTED_MODULE_0__["groupsLeft"];
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard.vue?vue&type=style&index=0&id=533aa8e0&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Dashboard.vue?vue&type=style&index=0&id=533aa8e0&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-enter-active[data-v-533aa8e0],\n.v-leave-active[data-v-533aa8e0] {\n  transition: opacity 0.3s;\n}\n.v-enter[data-v-533aa8e0], .v-leave-to[data-v-533aa8e0] /* .fade-leave-active below version 2.1.8 */ {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard.vue?vue&type=style&index=0&id=533aa8e0&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Dashboard.vue?vue&type=style&index=0&id=533aa8e0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=533aa8e0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard.vue?vue&type=style&index=0&id=533aa8e0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard.vue?vue&type=template&id=533aa8e0&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Dashboard.vue?vue&type=template&id=533aa8e0&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { dark: "" } },
    [
      _c("navegation-drawer-left", {
        attrs: {
          drawer: _vm.drawer,
          clipped: _vm.clipped,
          miniVariant: _vm.miniVariant,
          noAction: _vm.noAction
        },
        on: {
          "update:drawer": function($event) {
            _vm.drawer = $event
          },
          "update:clipped": function($event) {
            _vm.clipped = $event
          },
          "update:miniVariant": function($event) {
            _vm.miniVariant = $event
          },
          "update:mini-variant": function($event) {
            _vm.miniVariant = $event
          },
          "update:noAction": function($event) {
            _vm.noAction = $event
          },
          "update:no-action": function($event) {
            _vm.noAction = $event
          }
        }
      }),
      _vm._v(" "),
      _c(
        "v-app-bar",
        { attrs: { "clipped-left": _vm.clipped, fixed: "", app: "" } },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  _vm.fixed = !_vm.fixed
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-minus")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-toolbar-title",
            [
              _c(
                "v-menu",
                {
                  attrs: { bottom: "", "offset-y": "" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-btn",
                            _vm._g(
                              _vm._b(
                                { staticClass: "ma-2", attrs: { text: "" } },
                                "v-btn",
                                attrs,
                                false
                              ),
                              on
                            ),
                            [
                              _c("v-icon", { attrs: { left: "", dark: "" } }, [
                                _vm._v("mdi-account-circle-outline")
                              ]),
                              _vm._v(_vm._s(_vm.title) + "\n            "),
                              _c("v-icon", { attrs: { right: "", dark: "" } }, [
                                _vm._v(
                                  "\n              mdi-arrow-down-drop-circle-outline\n            "
                                )
                              ])
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.showPassForm = true
                            }
                          }
                        },
                        [
                          _c(
                            "v-list-item-action",
                            [
                              _c("v-icon", { attrs: { light: "" } }, [
                                _vm._v("mdi-shield-lock-outline")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-title", [
                            _vm._v("Cambiar contraseña")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { on: { click: _vm.logout } },
                        [
                          _c(
                            "v-list-item-action",
                            [
                              _c("v-icon", { attrs: { light: "" } }, [
                                _vm._v("mdi-power-standby")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-title", [_vm._v("Cerrar sesión")])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          (_vm.VueEnv === "development"
          ? true
          : false)
            ? _c(
                "v-chip",
                {
                  staticClass: "ma-2",
                  attrs: { color: "green accent-4", outlined: "" }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v(" mdi-wrench")
                  ]),
                  _vm._v("\n      Desarrollador VUE\n    ")
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          (_vm.LaravelEnv === "local"
          ? true
          : false)
            ? _c(
                "v-chip",
                {
                  staticClass: "ma-2",
                  attrs: { color: "red darken-4", outlined: "" }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v(" mdi-wrench")
                  ]),
                  _vm._v("\n      Desarrollador LARAVEL\n    ")
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                fab: "",
                dark: "",
                outlined: "",
                title: "Actualizar",
                small: "",
                color: "primary"
              },
              on: { click: _vm.update }
            },
            [_c("v-icon", [_vm._v("mdi-refresh")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  _vm.rightDrawer = !_vm.rightDrawer
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-menu")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-main", [
        _c(
          "div",
          { staticClass: "mx-2" },
          [
            _c(
              "transition",
              { attrs: { mode: "out-in" } },
              [_c("router-view")],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/NavegationDraweLeft.vue?vue&type=template&id=3a6d5138&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/NavegationDraweLeft.vue?vue&type=template&id=3a6d5138& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-navigation-drawer",
    {
      attrs: {
        "mini-variant": _vm.miniVariant,
        clipped: _vm.clipped,
        fixed: "",
        app: ""
      },
      model: {
        value: _vm.drawerLeft,
        callback: function($$v) {
          _vm.drawerLeft = $$v
        },
        expression: "drawerLeft"
      }
    },
    [
      _c(
        "v-list",
        _vm._l(_vm.grupos, function(grupo, i) {
          return _c(
            "v-list-group",
            {
              key: i,
              attrs: {
                value: false,
                "prepend-icon": grupo.icon,
                "no-action": _vm.noAction
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "activator",
                    fn: function() {
                      return [
                        _c(
                          "v-list-item-content",
                          [
                            _c("v-list-item-title", [
                              _c(
                                "div",
                                {
                                  staticClass: "text-wrap",
                                  staticStyle: { width: "6rem" }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(grupo.title) +
                                      "\n            "
                                  )
                                ]
                              )
                            ])
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
                  }
                ],
                null,
                true
              )
            },
            [
              _vm._v(" "),
              _vm._l(grupo.items, function(item, j) {
                return _c(
                  "v-list-item",
                  {
                    key: j,
                    staticClass: "ml-3",
                    attrs: { to: item.to, router: "", exact: "" }
                  },
                  [
                    _c(
                      "v-list-item-action",
                      [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item-content",
                      [
                        _c("v-list-item-title", [
                          _c(
                            "div",
                            {
                              staticClass: "text-wrap",
                              staticStyle: { width: "6rem" }
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.title) +
                                  "\n            "
                              )
                            ]
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              })
            ],
            2
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/layouts/Dashboard.vue":
/*!********************************************!*\
  !*** ./resources/js/layouts/Dashboard.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_533aa8e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=533aa8e0&scoped=true& */ "./resources/js/layouts/Dashboard.vue?vue&type=template&id=533aa8e0&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_533aa8e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=533aa8e0&scoped=true&lang=css& */ "./resources/js/layouts/Dashboard.vue?vue&type=style&index=0&id=533aa8e0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_533aa8e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_533aa8e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "533aa8e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/layouts/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Dashboard.vue?vue&type=style&index=0&id=533aa8e0&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/layouts/Dashboard.vue?vue&type=style&index=0&id=533aa8e0&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_533aa8e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=533aa8e0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard.vue?vue&type=style&index=0&id=533aa8e0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_533aa8e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_533aa8e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_533aa8e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_533aa8e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/layouts/Dashboard.vue?vue&type=template&id=533aa8e0&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/layouts/Dashboard.vue?vue&type=template&id=533aa8e0&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_533aa8e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=533aa8e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard.vue?vue&type=template&id=533aa8e0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_533aa8e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_533aa8e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/NavegationDraweLeft.vue":
/*!******************************************************!*\
  !*** ./resources/js/layouts/NavegationDraweLeft.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavegationDraweLeft_vue_vue_type_template_id_3a6d5138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavegationDraweLeft.vue?vue&type=template&id=3a6d5138& */ "./resources/js/layouts/NavegationDraweLeft.vue?vue&type=template&id=3a6d5138&");
/* harmony import */ var _NavegationDraweLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavegationDraweLeft.vue?vue&type=script&lang=js& */ "./resources/js/layouts/NavegationDraweLeft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavegationDraweLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavegationDraweLeft_vue_vue_type_template_id_3a6d5138___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavegationDraweLeft_vue_vue_type_template_id_3a6d5138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/NavegationDraweLeft.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/NavegationDraweLeft.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/layouts/NavegationDraweLeft.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavegationDraweLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NavegationDraweLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/NavegationDraweLeft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavegationDraweLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/NavegationDraweLeft.vue?vue&type=template&id=3a6d5138&":
/*!*************************************************************************************!*\
  !*** ./resources/js/layouts/NavegationDraweLeft.vue?vue&type=template&id=3a6d5138& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavegationDraweLeft_vue_vue_type_template_id_3a6d5138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NavegationDraweLeft.vue?vue&type=template&id=3a6d5138& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/NavegationDraweLeft.vue?vue&type=template&id=3a6d5138&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavegationDraweLeft_vue_vue_type_template_id_3a6d5138___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavegationDraweLeft_vue_vue_type_template_id_3a6d5138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/config/groups/groupsLeft/control.js":
/*!******************************************************************!*\
  !*** ./resources/js/layouts/config/groups/groupsLeft/control.js ***!
  \******************************************************************/
/*! exports provided: controlGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlGroup", function() { return controlGroup; });
var controlGroup = {
  icon: "mdi-notebook-check-outline",
  clave: "FC",
  title: "Control Expendientes",
  items: [{
    icon: "mdi-file-document-outline",
    title: "Expedientes",
    to: {
      name: "mantenimiento.usuarios"
    },
    clave: "FacturacionCatalogoServicios"
  }]
};

/***/ }),

/***/ "./resources/js/layouts/config/groups/groupsLeft/expendientes.js":
/*!***********************************************************************!*\
  !*** ./resources/js/layouts/config/groups/groupsLeft/expendientes.js ***!
  \***********************************************************************/
/*! exports provided: expendientesGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expendientesGroup", function() { return expendientesGroup; });
var expendientesGroup = {
  icon: "mdi-file-document-multiple-outline",
  clave: "FC",
  title: "Expedientes",
  items: [{
    icon: "mdi-file-document-outline",
    title: "Expedientes",
    to: {
      name: "mantenimiento.usuarios"
    },
    clave: "FacturacionCatalogoServicios"
  }]
};

/***/ }),

/***/ "./resources/js/layouts/config/groups/groupsLeft/mantenimiento.js":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/config/groups/groupsLeft/mantenimiento.js ***!
  \************************************************************************/
/*! exports provided: mantenimientoGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mantenimientoGroup", function() { return mantenimientoGroup; });
var mantenimientoGroup = {
  icon: "mdi-tools",
  clave: "FC",
  title: "Mantenimiento",
  items: [{
    icon: "mdi-account-cog",
    title: "Usuarios",
    to: {
      name: "mantenimiento.usuarios"
    },
    clave: "FacturacionCatalogoServicios"
  }, {
    icon: "mdi-shield-key-outline",
    title: "Roles",
    to: {
      name: "mantenimiento.roles"
    },
    clave: "FacturacionCatalogoServicios"
  }]
};

/***/ }),

/***/ "./resources/js/layouts/config/groups/groupsLeft/reportes.js":
/*!*******************************************************************!*\
  !*** ./resources/js/layouts/config/groups/groupsLeft/reportes.js ***!
  \*******************************************************************/
/*! exports provided: reportesGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportesGroup", function() { return reportesGroup; });
var reportesGroup = {
  icon: "mdi-file-pdf-outline",
  clave: "FC",
  title: "Reportes",
  items: [{
    icon: "mdi-file-document-outline",
    title: "Expedientes",
    to: {
      name: "mantenimiento.usuarios"
    },
    clave: "FacturacionCatalogoServicios"
  }]
};

/***/ }),

/***/ "./resources/js/layouts/config/groups/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/layouts/config/groups/index.js ***!
  \*****************************************************/
/*! exports provided: groupsLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupsLeft", function() { return groupsLeft; });
/* harmony import */ var _groupsLeft_mantenimiento__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupsLeft/mantenimiento */ "./resources/js/layouts/config/groups/groupsLeft/mantenimiento.js");
/* harmony import */ var _groupsLeft_expendientes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groupsLeft/expendientes */ "./resources/js/layouts/config/groups/groupsLeft/expendientes.js");
/* harmony import */ var _groupsLeft_reportes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groupsLeft/reportes */ "./resources/js/layouts/config/groups/groupsLeft/reportes.js");
/* harmony import */ var _groupsLeft_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groupsLeft/control */ "./resources/js/layouts/config/groups/groupsLeft/control.js");




var groupsLeft = [_groupsLeft_mantenimiento__WEBPACK_IMPORTED_MODULE_0__["mantenimientoGroup"], _groupsLeft_expendientes__WEBPACK_IMPORTED_MODULE_1__["expendientesGroup"], _groupsLeft_reportes__WEBPACK_IMPORTED_MODULE_2__["reportesGroup"], _groupsLeft_control__WEBPACK_IMPORTED_MODULE_3__["controlGroup"]];

/***/ })

}]);