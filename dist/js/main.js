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

eval("// 2. Написать универсальную функцию, которая принимает параметр url, будет делать асинхронные запросы по этому \n// url и возвращать промис с результатом запросов. (Не используя fetch)\n// 3. Используя написанную в предыдущем задании функцию, реализовать при помощи цепочки промисов следующее:\n// Получить массив пользователей гитхаба по ссылке https://tanuhaua.github.io/datas-file-json/github_users.json. \n// Вид объекта каждого пользователя:\n// {\n//   \"fullName\": \"Name Surname\",\n//   \"githubName\": \"github name\"\n// }\n// Затем для каждого пользователя получить информацию по API Github по ссылке https://api.github.com/users/{githubName}\n// Вывести на странице для каждого пользователя fullName и его аватарку с github\n// Оформить верстку результатов (красиво:))))\n// 4. Скопируйте код предыдущего задания и замените функцию, выполняющую асинхронные запросы на fetch.\nfunction httpGet(url) {\n  return new Promise(function (resolve, reject) {\n    var request = new XMLHttpRequest();\n    request.open('GET', url, true);\n\n    request.onload = function () {\n      if (request.status === 200) {\n        resolve(request.response);\n      }\n    };\n\n    request.onerror = function () {\n      return reject(new Error(\"Network Error\"));\n    };\n\n    request.send();\n  });\n}\n\nhttpGet('https://tanuhaua.github.io/datas-file-json/github_users.json').then(function (response) {\n  JSON.parse(response).forEach(function (elem) {\n    httpGet(\"https://api.github.com/users/\".concat(elem.githubName)).then(function (response) {\n      var div = document.createElement('div');\n      div.classList.add('card');\n      div.style.backgroundImage = \"url'\".concat(JSON.parse(response).avatar_url, \"'\");\n      document.body.appendChild(div); // const x = new Image;      \n      // x.src = JSON.parse(response).avatar_url;\n      // document.body.appendChild(x);\n    });\n  });\n}); // .catch(res => console.error(res))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });