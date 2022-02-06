// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/classes/Hombre.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hombre = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Hombre = /*#__PURE__*/function () {
  function Hombre(peso, tipo, estatura, medida, edad, actividad) {
    _classCallCheck(this, Hombre);

    this.peso = peso;
    this.tipo = tipo;
    this.estatura = estatura;
    this.medida = medida;
    this.edad = edad;
    this.actividad = actividad;
  }

  _createClass(Hombre, [{
    key: "calculate",
    value: function calculate() {
      var pesoBase = 66;
      var pesoCalc;

      if (this.tipo === "kilos") {
        pesoCalc = this.peso * 13.7;
      } else {
        pesoCalc = this.peso / 2.2046 * 13.7;
      }

      var estaturaCalc;

      if (this.medida === "cm") {
        estaturaCalc = this.estatura * 5;
      } else {
        var arrayOfStrings = this.estatura.toString().split("");
        var arrayOfNumbers = arrayOfStrings.map(Number);
        var feetCalculated = arrayOfNumbers[0] * 12 + arrayOfNumbers[1];
        estaturaCalc = feetCalculated * 2.54 * 5.0033;
      }

      var edadCalc = this.edad * 6.8;
      var rmb = [pesoBase, pesoCalc, estaturaCalc, edadCalc, this.actividad];
      return rmb;
    }
  }]);

  return Hombre;
}();

exports.Hombre = Hombre;
},{}],"js/classes/Mujer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mujer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Mujer = /*#__PURE__*/function () {
  function Mujer(peso, tipo, estatura, medida, edad, actividad) {
    _classCallCheck(this, Mujer);

    this.peso = peso;
    this.tipo = tipo;
    this.estatura = estatura;
    this.medida = medida;
    this.edad = edad;
    this.actividad = actividad;
  }

  _createClass(Mujer, [{
    key: "calculate",
    value: function calculate() {
      var pesoBase = 655;
      var pesoCalc;

      if (this.tipo === "kilos") {
        pesoCalc = this.peso * 9.6;
      } else {
        pesoCalc = this.peso / 2.2046 * 9.6;
      }

      var estaturaCalc;

      if (this.medida === "cm") {
        estaturaCalc = this.estatura * 1.8;
      } else {
        var arrayOfStrings = this.estatura.toString().split("");
        var arrayOfNumbers = arrayOfStrings.map(Number);
        var feetCalculated = arrayOfNumbers[0] * 12 + arrayOfNumbers[1];
        estaturaCalc = feetCalculated * 2.54 * 1.8;
      }

      var edadCalc = this.edad * 4.7;
      var rmb = [pesoBase, pesoCalc, estaturaCalc, edadCalc, this.actividad];
      return rmb;
    }
  }]);

  return Mujer;
}();

exports.Mujer = Mujer;
},{}],"js/classes/Calculator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calculator = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Calculator = /*#__PURE__*/function () {
  function Calculator(data) {
    _classCallCheck(this, Calculator);

    this.data = data;
  }

  _createClass(Calculator, [{
    key: "calculateRmb",
    value: function calculateRmb() {
      var data = this.data;
      var valueOfActividad = 0;

      switch (data[4]) {
        case "sedentario":
          valueOfActividad = 1.15;
          break;

        case "ligera":
          valueOfActividad = 1.35;
          break;

        case "moderada":
          valueOfActividad = 1.55;
          break;

        case "intensta":
          valueOfActividad = 1.75;
          break;

        case "muy-intensa":
          valueOfActividad = 1.95;
          break;
      }

      var sumOfData = data[0] + data[1] + data[2];
      var sumOfDataMinusEdad = sumOfData - data[3];
      var rmbRounded = Math.round(sumOfDataMinusEdad * valueOfActividad);
      return rmbRounded;
    }
  }, {
    key: "calculateGoals",
    value: function calculateGoals(objetivo, rmb) {
      var goal;

      if (objetivo === "mantener") {
        goal = rmb;
      } else if (objetivo === "bajar") {
        goal = rmb - 327;
      } else {
        goal = rmb + 327;
      }

      return goal;
    }
  }]);

  return Calculator;
}();

exports.Calculator = Calculator;
},{}],"js/classes/Displayer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Displayer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Displayer = /*#__PURE__*/function () {
  function Displayer(container) {
    _classCallCheck(this, Displayer);

    this.container = container;
  }

  _createClass(Displayer, [{
    key: "displayErrorMessages",
    value: function displayErrorMessages(errorMessages, title) {
      var container = this.container;
      title.style.opacity = "0";
      var errorDiv = document.createElement("div");
      errorDiv.classList.add("col-12", "bg-danger", "errorAlert");
      errorMessages.forEach(function (e) {
        var message = document.createElement("p");
        message.innerText = e;
        errorDiv.appendChild(message);
      });
      container.prepend(errorDiv);
    }
  }, {
    key: "displayActividad",
    value: function displayActividad() {
      var container = this.container;
      container.innerHTML = "";
      var labelDiv = document.createElement("div");
      labelDiv.className = "col-md-6 text-center";
      labelDiv.innerHTML = "<label for=\"actividad\">Nivel de Actividad</label>";
      var selectDiv = document.createElement("div");
      selectDiv.className = "col-md-6";
      selectDiv.innerHTML = "\n         <select class=\"text-center\" name=\"actividad\" id=\"actividad\">\n                    <option value=\"sedentario\">Sedentario</option>\n                    <option value=\"ligera\">Actividad Ligera</option>\n                    <option value=\"moderada\">Actividad Moderada</option>\n                    <option value=\"intensa\">Actividad Intensa</option>\n                    <option value=\"muy-intensa\">Actividad Muy Intensa</option>\n                </select>\n        ";
      var buttonDiv = document.createElement("div");
      buttonDiv.className = "col-12";
      buttonDiv.innerHTML = "<p class=\"objetivoBtn button\">Continuar</p>";
      container.appendChild(labelDiv);
      container.appendChild(selectDiv);
      container.appendChild(buttonDiv);
    }
  }, {
    key: "displayObjetivo",
    value: function displayObjetivo() {
      var container = this.container;
      container.innerHTML = "";
      var labelDiv = document.createElement("div");
      labelDiv.className = "col-md-6 text-center";
      labelDiv.innerHTML = "<label for=\"actividad\">Mi Objetivo es</label>";
      var selectDiv = document.createElement("div");
      selectDiv.className = "col-md-6";
      selectDiv.innerHTML = "\n         <select class=\"text-center\" id=\"objetivo\" name=\"objetivo\">\n                    <option value=\"mantener\">Mantener mi peso</option>\n                    <option value=\"bajar\">Bajar de peso</option>\n                    <option value=\"subir\">Subir de peso</option>\n                </select>\n        ";
      var buttonDiv = document.createElement("div");
      buttonDiv.className = "col-12";
      buttonDiv.innerHTML = "<input class=\"button\" id=\"submit\" type=\"submit\" value=\"Calcular\">";
      container.appendChild(labelDiv);
      container.appendChild(selectDiv);
      container.appendChild(buttonDiv);
    }
  }, {
    key: "displayResult",
    value: function displayResult(objetivoCalories, objetivo) {
      var container = this.container;
      container.innerHTML = "";
      var descriptionElement = document.createElement("p");
      var descriptionContent = "Si quer\xE9s ".concat(objetivo, " tu peso, debes comer alrededor de:");
      descriptionElement.innerText = descriptionContent;
      var caloriesElement = document.createElement("h1");
      var caloriesContent = objetivoCalories;
      caloriesElement.innerText = caloriesContent.toString();
      container.appendChild(descriptionElement);
      container.appendChild(caloriesElement);
    }
  }]);

  return Displayer;
}();

exports.Displayer = Displayer;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _Hombre = require("./classes/Hombre.js");

var _Mujer = require("./classes/Mujer.js");

var _Calculator = require("./classes/Calculator.js");

var _Displayer = require("./classes/Displayer.js");

//**IMPORTS**/

/**VARIABLES**/
var container = document.querySelector('#form');
var form = document.querySelector('form');
var continueBtn = document.querySelector('.actividadBtn');
var titleForm = document.querySelector('.title__form');
var typeNumberInputs = document.querySelectorAll('.numInput');
var sexo = document.querySelector('#sexo');
var peso = document.querySelector('#peso');
var tipoDePeso = document.querySelector('#tipo-de-peso');
var estaturaEnCm = document.querySelector('#estatura');
var estaturaEnInches;
var estaturaTotal;
var feet = document.querySelector("#feet");
var inches = document.querySelector("#inches");
var tipoDeMedida = document.querySelector('#tipo-de-medida');
var edad = document.querySelector('#edad');
var actividad;
var objetivo;
tipoDeMedida.addEventListener("change", function () {
  var estaturaEnCmInput = document.querySelector('.estaturaEnCm');
  var estaturaEnInches = document.querySelector('.estaturaEnInches');

  if (tipoDeMedida.value == "ft-inches") {
    estaturaEnCmInput.classList.add("d-none");
    estaturaEnInches.classList.remove("d-none");
  } else {
    estaturaEnInches.classList.add("d-none");
    estaturaEnCmInput.classList.remove("d-none");
  }
});
var displayer = new _Displayer.Displayer(container);
var isCorrect = true;
var errorMessages = [];

var activateButton = function activateButton() {
  if (continueBtn.classList.contains("buttonDisabled")) {
    continueBtn.classList.remove("buttonDisabled");
  }
};

var desactivateButton = function desactivateButton() {
  continueBtn.classList.add("buttonDisabled");
};

var paintInputNormal = function paintInputNormal(event) {
  event.style.border = "none";
};

var removeInputAlert = function removeInputAlert(event) {
  var eventParent = event.parentElement;
  var eventParentLength = eventParent.childNodes.length - 1;
  eventParent.removeChild(eventParent.childNodes[eventParentLength]);
};

var displayError = function displayError(event) {
  if (!event.parentElement.querySelector(".input__alert")) {
    var inputAlert = document.createElement("p");
    inputAlert.classList.add("input__alert");
    var inputAlertContent = "Se requiere atención especializada";
    inputAlert.textContent = inputAlertContent;
    event.parentElement.append(inputAlert);
  }

  event.style.border = "1px solid red";
  desactivateButton();
  isCorrect = false;
};

typeNumberInputs.forEach(function (i) {
  i.addEventListener("blur", function (e) {
    var input = e.target;

    if (input.id === "peso" && tipoDePeso.value === "kilos") {
      if (input.valueAsNumber >= 300 || input.valueAsNumber <= 45) {
        displayError(input);
      } else {
        paintInputNormal(input);
        activateButton();
        isCorrect = true;
      }
    }

    if (input.id === "peso" && tipoDePeso.value === "libras") {
      if (input.valueAsNumber >= 660 || input.valueAsNumber <= 45) {
        displayError(input);
      } else {
        paintInputNormal(input);
        activateButton();
        isCorrect = true;
      }
    }

    if (input.id === "estatura" && tipoDeMedida.value === "cm") {
      if (estaturaEnCm.valueAsNumber >= 240 || estaturaEnCm.valueAsNumber <= 100) {
        displayError(input);
      } else {
        paintInputNormal(input);
        activateButton();
        isCorrect = true;
      }
    }

    if (input.id === "edad") {
      if (edad.valueAsNumber < 18 || edad.valueAsNumber > 85) {
        displayError(input);
      } else {
        paintInputNormal(input);
        activateButton();
        isCorrect = true;
      }
    }
  });
});
typeNumberInputs.forEach(function (i) {
  i.addEventListener("input", function (e) {
    var input = e.target;

    if (input.value === "") {
      activateButton();
      removeInputAlert(input);
    }
  });
});

var definirEstatura = function definirEstatura() {
  if (tipoDeMedida.value === "cm") {
    estaturaTotal = estaturaEnCm.valueAsNumber;
  } else {
    if (tipoDeMedida.value === "ft-inches") {
      var inchPlusFeet = feet.valueAsNumber.toString() + inches.valueAsNumber.toString();
      estaturaEnInches = Number(inchPlusFeet);
      estaturaTotal = estaturaEnInches;
    }
  }
};

continueBtn.addEventListener('click', function () {
  if (!peso.valueAsNumber) {
    isCorrect = false;
    errorMessages.push("Debes ingresar un peso válido");
  }

  definirEstatura();

  if (tipoDeMedida.value === "cm") {
    if (!estaturaEnCm.valueAsNumber) {
      isCorrect = false;
      errorMessages.push("Debes ingresar una estatura válida");
    }
  }

  if (tipoDeMedida.value === "ft-inches") {
    if (!feet.valueAsNumber || !inches.valueAsNumber) {
      isCorrect = false;
      errorMessages.push("Debes ingresar una estatura válida");
    }
  }

  if (!edad.valueAsNumber) {
    isCorrect = false;
    errorMessages.push("Debes ingresar una edad válida");
  }

  if (!isCorrect) {
    if (document.querySelector(".errorAlert")) {
      container.removeChild(container.children[0]);
    }

    displayer.displayErrorMessages(errorMessages, titleForm);
    errorMessages = [];
    desactivateButton();
  } else {
    console.log(estaturaEnInches);
    displayer.displayActividad();
    actividad = document.querySelector('#actividad');

    if (document.querySelector(".objetivoBtn")) {
      var objetivoBtn = document.querySelector(".objetivoBtn");
      objetivoBtn.addEventListener("click", function () {
        displayer.displayObjetivo();
        objetivo = document.querySelector('#objetivo');
      });
    }
  }
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var user;

  if (sexo.value === 'hombre') {
    user = new _Hombre.Hombre(peso.valueAsNumber, tipoDePeso.value, estaturaTotal, tipoDeMedida.value, edad.valueAsNumber, actividad.value);
  } else {
    user = new _Mujer.Mujer(peso.valueAsNumber, tipoDePeso.value, estaturaTotal, tipoDeMedida.value, edad.valueAsNumber, actividad.value);
  }

  var calculator = new _Calculator.Calculator(user.calculate());
  var rmb = calculator.calculateRmb();
  var objetivoCalories = calculator.calculateGoals(objetivo.value, rmb);
  displayer.displayResult(objetivoCalories, objetivo.value);
});
},{"./classes/Hombre.js":"js/classes/Hombre.js","./classes/Mujer.js":"js/classes/Mujer.js","./classes/Calculator.js":"js/classes/Calculator.js","./classes/Displayer.js":"js/classes/Displayer.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61833" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map