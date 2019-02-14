/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function httpGet(url) {\n  return new Promise(function (resolve, reject) {\n    var request = new XMLHttpRequest();\n    request.open('GET', url, true);\n\n    request.onload = function () {\n      if (request.status === 200) {\n        resolve(request.response);\n      } else {\n        reject(new Error(\"\".concat(request.status, \" : \").concat(request.statusText)));\n      }\n    };\n\n    request.onerror = function () {\n      return reject(new Error(\"\".concat(request.status, \" : \").concat(request.statusText)));\n    };\n\n    request.send();\n  });\n}\n\nfetch('https://tanuhaua.github.io/datas-file-json/github_users.json').then(function (response) {\n  if (response.status === 200) {\n    return response.json();\n  }\n}).then(function (arr) {\n  arr.forEach(function (elem) {\n    fetch(\"https://api.github.com/users/\".concat(elem.githubName)).then(function (user) {\n      if (user.status === 200) {\n        return user.json();\n      }\n    }).then(function (response) {\n      createHtml(elem.fullName, response.avatar_url);\n    });\n  });\n});\nhttpGet('https://tanuhaua.github.io/datas-file-json/github_users.json').then(function (response) {\n  return JSON.parse(response);\n}).then(function (arr) {\n  arr.forEach(function (elem) {\n    httpGet(\"https://api.github.com/users/\".concat(elem.githubName)).then(function (response) {\n      createHtml(elem.fullName, JSON.parse(response)).avatar_url;\n    });\n  });\n});\n\nfunction random(min, max) {\n  return min + Math.random() * (max - min);\n}\n\nfunction createHtml(userName, userUrl) {\n  var div = document.createElement('div');\n  div.classList.add('card');\n  div.style.transform = \"rotate(\".concat(random(-4, 4), \"deg)\");\n  document.body.appendChild(div);\n  var img = new Image();\n  img.src = userUrl;\n  img.classList.add('card__img');\n  div.appendChild(img);\n  var title = document.createElement('h2');\n  title.innerText = userName;\n  title.classList.add('card__title');\n  div.appendChild(title);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });