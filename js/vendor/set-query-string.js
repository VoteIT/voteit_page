!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.setQueryString=e()}}(function(){return function e(n,t,r){function o(u,f){if(!t[u]){if(!n[u]){var s="function"==typeof require&&require;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var a=t[u]={exports:{}};n[u][0].call(a.exports,function(e){var t=n[u][1][e];return o(t?t:e)},a,a.exports,e,n,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,t){"use strict";var r=e("strict-uri-encode");t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e){return"string"!=typeof e?{}:(e=e.trim().replace(/^(\?|#|&)/,""),e?e.split("&").reduce(function(e,n){var t=n.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;return r=decodeURIComponent(r),o=void 0===o?null:decodeURIComponent(o),e.hasOwnProperty(r)?Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]:e[r]=o,e},{}):{})},t.stringify=function(e){return e?Object.keys(e).sort().map(function(n){var t=e[n];return Array.isArray(t)?t.sort().map(function(e){return r(n)+"="+r(e)}).join("&"):r(n)+"="+r(t)}).filter(function(e){return e.length>0}).join("&"):""}},{"strict-uri-encode":2}],2:[function(e,n,t){"use strict";n.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},{}],3:[function(e,n,t){var r,o,i=e("query-string");"undefined"!=typeof window&&(r=window&&window.history&&window.history.replaceState,o=window&&window.history&&window.history.pushState),r?n.exports=function(e,n){n||(n={});var t,u=!e,f=!u&&"string"==typeof e,s=n.clear||f,c=n.pushState?o:r,a=s?{}:i.parse(window.location.search);if(u||f)t=e||"";else{for(var d in e){var p=e[d];p||0===p?a[d]=e[d]:delete a[d]}t=i.stringify(a)}t.length&&"?"!==t.charAt(0)&&(t="?"+t),c.call(window.history,window.history.state,"",window.location.pathname+(t||""))}:n.exports=function(){}},{"query-string":1}]},{},[3])(3)});