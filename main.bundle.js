/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var e,t,n,r={1088:(e,t,n)=>{var r=n(6540),o=n(961),a=n(8651),i=n(8106);const l=JSON.parse('{"z":{"strings":["Hi everyone !","Welcome to my github page"],"loop":true,"typeSpeed":50,"backSpeed":50,"backDelay":3000,"startDelay":500}}');var c=n(5556),u=n.n(c),f=n(8736),s=n.n(f);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function y(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==m(t)?t:t+""}function d(e,t,n){return t=v(t),function(e,t){if(t&&("object"==m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,h()?Reflect.construct(t,n||[],v(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}var g=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=d(this,t,[e]);var r=l.z;return n.state={typedOptions:r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.createElement("div",{className:"site__col site__col--about"},r.createElement("div",{className:"site__content"},r.createElement("h2",{className:"title no-margin"},"Eka Rudianto"),r.createElement("span",{className:"line"}),r.createElement("p",null,r.createElement(s(),{strings:this.state.typedOptions.strings,typeSpeed:this.state.typedOptions.typeSpeed,backSpeed:this.state.typedOptions.backSpeed,backDelay:this.state.typedOptions.backDelay,loop:this.state.typedOptions.loop,startDelay:this.state.typedOptions.startDelay}))))}}])&&p(n.prototype,o),a&&p(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o,a}(r.Component);g.propTypes={name:u().string};const E=g;var w=n(6451),S=n.n(w);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}function P(e){var t=function(e,t){if("object"!=O(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==O(t)?t:t+""}function k(e,t,n){return t=_(t),function(e,t){if(t&&("object"==O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,x()?Reflect.construct(t,n||[],_(e).constructor):t.apply(e,n))}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}const C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.createElement("div",{className:"email"},r.createElement("a",{href:"mailto:ekarudianto89@gmail.com"},r.createElement(S(),{size:40,style:{color:"#003D6B"}})))}}])&&j(n.prototype,o),a&&j(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o,a}(r.Component);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,D(r.key),r)}}function D(e){var t=function(e,t){if("object"!=L(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==L(t)?t:t+""}function R(e,t,n){return t=I(t),function(e,t){if(t&&("object"==L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,A()?Reflect.construct(t,n||[],I(e).constructor):t.apply(e,n))}function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(A=function(){return!!e})()}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}const q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.createElement("div",{className:"links"},r.createElement("a",{className:"link",href:"https://github.com/ekarudianto",rel:"noopener noreferrer",target:"_blank"},"Github"),"  ",r.createElement("a",{className:"link",href:"https://www.linkedin.com/in/ekarudianto/",rel:"noopener noreferrer",target:"_blank"},"Linkedin"))}}])&&N(n.prototype,o),a&&N(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o,a}(r.Component);function B(){return r.createElement("div",{className:"projects"},r.createElement(a.N_,{to:"/projects",className:"link--state-hide"},"Projects"))}function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,z(r.key),r)}}function z(e){var t=function(e,t){if("object"!=M(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==M(t)?t:t+""}function Y(e,t,n){return t=H(t),function(e,t){if(t&&("object"==M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,J()?Reflect.construct(t,n||[],H(e).constructor):t.apply(e,n))}function J(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(J=function(){return!!e})()}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}var V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Y(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.createElement("div",{className:"site"},r.createElement(C,null),r.createElement(E,null),r.createElement(q,null),r.createElement(B,null))}}])&&G(n.prototype,o),a&&G(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o,a}(r.Component);V.propTypes={name:u().string};const $=V;function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,W(r.key),r)}}function W(e){var t=function(e,t){if("object"!=K(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==K(t)?t:t+""}function Z(e,t,n){return t=ee(t),function(e,t){if(t&&("object"==K(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,X()?Reflect.construct(t,n||[],ee(e).constructor):t.apply(e,n))}function X(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(X=function(){return!!e})()}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ee(e)}function te(e,t){return te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},te(e,t)}const ne=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Z(this,t,[e])).state={lang:"en"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&te(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.createElement($,null)}}])&&Q(n.prototype,o),a&&Q(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o,a}(r.Component);function re(){return r.createElement("div",{className:"site container"},r.createElement("h2",null,"My pet projects"),r.createElement("ul",null,r.createElement("li",null,r.createElement(a.N_,{to:"/forex-trading",className:"link"},"Forex trading formulas")),r.createElement("li",null,r.createElement("a",{href:"/capital-screener/index.html"},"Capital.com screener")),r.createElement("li",null,r.createElement(a.N_,{to:"/trade-journal",className:"link"},"Trade journal"))))}function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ae(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ie(){var e=oe((0,r.useState)(0),2),t=e[0],n=e[1],o=oe((0,r.useState)(0),2),a=o[0],i=o[1];return r.createElement("div",{className:"site container"},r.createElement("h2",null,"Spread"),r.createElement("p",null,"Spread is a gap differences that you get from substracting an ask price to a bid price."),r.createElement("div",{className:"box"},"Ask Price ",r.createElement("input",{type:"text",name:"askPrice",value:t,onChange:function(e){return n(e.target.value)}})," - Bid Price ",r.createElement("input",{type:"text",name:"bidPrice",value:a,onChange:function(e){return i(e.target.value)}}),r.createElement("p",null,"Spread is equal to ",(t-a).toFixed(5)," (displayed in quoted currency)")))}function le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ce(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ue(){var e=le((0,r.useState)(0),2),t=e[0],n=e[1],o=le((0,r.useState)(0),2),a=o[0],i=o[1];return r.createElement("div",{className:"site container"},r.createElement("h2",null,"Lots"),r.createElement("p",null,"Lots formula contains of how many $ are you willing to risk (Risk) and the Stop Lost point in which you can set (SLPips). Now if you have those values set, you can then have how many lots can you enter in a transaction, this way you can manage your risk easily in forex trading."),r.createElement("div",{className:"box"},"Risk ",r.createElement("input",{type:"text",name:"risk",value:t,onChange:function(e){return n(e.target.value)}}),r.createElement("br",null),"SLPips ",r.createElement("input",{type:"text",name:"bidPrice",value:a,onChange:function(e){return i(e.target.value)}}),r.createElement("p",null,"Lots that you can buy is equal to ",t/(10*a)||0," (displayed in quoted currency)")))}function fe(){return r.createElement("div",{className:"site container"},r.createElement("h2",null,"Forex trading formulas"),r.createElement(ie,null),r.createElement(ue,null))}var se=n(3663),me=n(4353),pe=n.n(me),ye=function(e){var t=e.value,n=e.onChange,o=e.placeholder,a=e.autoFocus,i=e.readOnly;return r.createElement("div",null,r.createElement("input",{readOnly:i,autoFocus:a,type:"text",value:t,onChange:n,placeholder:o}))};ye.propTypes={value:u().string.isRequired,onChange:u().func.isRequired,placeholder:u().string,autoFocus:u().bool,readOnly:u().bool};const de=ye;var he=function(e){var t=e.value,n=e.onChange,o=e.options;return r.createElement("div",null,r.createElement("select",{id:"dropdown",value:t,onChange:n},o.map((function(e){return r.createElement("option",{key:e.value,value:e.value},e.label)}))))};he.propTypes={value:u().string.isRequired,onChange:u().func.isRequired,options:u().array.isRequired};const ve=he;function be(e){try{var t=new URL(e).pathname.split("/").filter((function(e){return""!==e}));return t.length>0?t[t.length-1]:null}catch(e){return console.error("Invalid URL:",e),null}}function ge(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[],r="";return e["1mScreenshot"]&&(r=t?be(e["1mScreenshot"]):e["1mScreenshot"],n.push({label:"1m",url:r})),e["3mScreenshot"]&&(r=t?be(e["3mScreenshot"]):e["3mScreenshot"],n.push({label:"3m",url:r})),e["15mScreenshot"]&&(r=t?be(e["15mScreenshot"]):e["15mScreenshot"],n.push({label:"15m",url:r})),n}function Ee(e){return Ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ee(e)}function we(){we=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),l=new C(r||[]);return o(i,"_invoke",{value:k(e,n,l)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var m="suspendedStart",p="suspendedYield",y="executing",d="completed",h={};function v(){}function b(){}function g(){}var E={};u(E,i,(function(){return this}));var w=Object.getPrototypeOf,S=w&&w(w(L([])));S&&S!==n&&r.call(S,i)&&(E=S);var O=g.prototype=v.prototype=Object.create(E);function j(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function n(o,a,i,l){var c=s(e[o],e,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==Ee(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}})}function k(t,n,r){var o=m;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var c=x(l,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===m)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var u=s(t,n,r);if("normal"===u.type){if(o=r.done?d:p,u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=d,r.method="throw",r.arg=u.arg)}}}function x(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=s(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,h;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function L(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(Ee(t)+" is not iterable")}return b.prototype=g,o(O,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,c,"GeneratorFunction")),e.prototype=Object.create(O),e},t.awrap=function(e){return{__await:e}},j(P.prototype),u(P.prototype,l,(function(){return this})),t.AsyncIterator=P,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new P(f(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},j(O),u(O,c,"Generator"),u(O,i,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=L,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return l.type="throw",l.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:L(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}function Se(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}var Oe=function(e){var t=e.rows,n="DD-MM-YYYY HH:mm",o=function(e){return e.map((function(e){var t=ge(e).map((function(e){return"".concat(e.label,":").concat(e.url)})).join(";");return[e.ticker,e.entryDatetime.isValid()?e.entryDatetime.format(n):"",e.longShort,e.entry,e.lotSize,e.trend4h,e.trend15m,e.trend3m,e.tierPricingLevel,e.takeProfit,e.stopLoss,e.exitDatetime.isValid()?e.exitDatetime.format(n):"",e.exitPrice,e.gainLoss,e.setup,e.comment,t,e.lostTest,e.imbalance,e.inducement,e.badTrade,e.newsImpactedTrade,e.overnightFee].join(",")})).join("|")},a=function(){var e,r=(e=we().mark((function e(){var r,o,a;return we().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.map((function(e){var t=e.ticker,r=e.entryDatetime,o=e.longShort,a=e.entry,i=e.lotSize,l=e.trend4h,c=e.trend15m,u=e.trend3m,f=e.tierPricingLevel,s=e.takeProfit,m=e.stopLoss,p=e.exitDatetime,y=e.exitPrice,d=e.gainLoss,h=e.setup,v=e.comment,b=e.lostTest,g=e.imbalance,E=e.inducement,w=e.badTrade,S=e.newsImpactedTrade,O=e.overnightFee;return{ticker:t,entryDatetime:r.format(n),longShort:o,entry:a,lotSize:i,trend4h:l,trend15m:c,trend3m:u,tierPricingLevel:f,takeProfit:s,stopLoss:m,exitDatetime:p.format(n),exitPrice:y,gainLoss:d,setup:h,comment:v,images:ge(e,!1),lostTest:b,imbalance:g,inducement:E,badTrade:w,newsImpactedTrade:S,overnightFee:O}})),e.prev=2,e.next=5,fetch("".concat("https://murmuring-earth-80569-478a80600db5.herokuapp.com/macros/s/AKfycbzYH-Ns3A8HP8E90G-QvdWeyZhqDsRRJJEMLzrL1VEkFNe_y0PhRt1i3i7kJi8_45JYnQ/exec","?sheet=").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][(new Date).getMonth()]),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:r})});case 5:return o=e.sent,e.next=8,o.json();case 8:if(!(a=e.sent).success){e.next=13;break}alert("Data added successfully!"),e.next=14;break;case 13:throw new Error(a.error);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),console.error("Error inserting data:",e.t0),alert("Failed to add data.");case 20:case"end":return e.stop()}}),e,null,[[2,16]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){Se(a,r,o,i,l,"next",e)}function l(e){Se(a,r,o,i,l,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();return r.createElement("div",null,r.createElement("button",{onClick:function(){var e=o(t);navigator.clipboard.writeText("[".concat(e,"]")).then((function(){alert("Copied to clipboard!")})).catch((function(e){console.error("Failed to copy: ",e),alert("Failed to copy to clipboard.")}))}},"Copy text"),r.createElement("button",{onClick:a,style:{marginLeft:"10px"}},"Submit data to GSheet"),r.createElement("br",null),r.createElement("div",{className:"string-list-container"},o(t)))};Oe.propTypes={rows:u().array.isRequired};const je=Oe;var Pe=n(601),ke=n(5737),xe=n(8006),_e=function(e){var t=e.value,n=e.onChange,o=e.label;return r.createElement(ke.$,{dateAdapter:Pe.R},r.createElement("div",null,r.createElement(xe.K,{label:o||"Date and Time",format:"DD-MM-YYYY HH:mm",ampm:!1,slotProps:{actionBar:{actions:["clear","cancel","today"]}},sx:{width:230},value:t.isValid()?t:null,onChange:n})))};_e.propTypes={label:u().string,value:u().object.isRequired,onChange:u().func.isRequired};const Te=_e;function Ce(e){return Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ce(e)}function Le(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=Ce(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=Ce(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==Ce(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ne(e){return function(e){if(Array.isArray(e))return Ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Re(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function De(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||Re(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Re(e,t){if(e){if("string"==typeof e)return Ae(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ae(e,t):void 0}}function Ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Ie=[{value:"u",label:"Uptrend"},{value:"d",label:"Downtrend"}];function Fe(){var e=De(r.useState([]),2),t=e[0],n=e[1],o=De(r.useState(null),2),a=o[0],i=o[1],l=function(e,r,o){n(t.map((function(t){return t.id===e?Object.assign({},t,Le({},r,o)):t})))};return r.createElement("div",{className:"site container"},r.createElement("h2",null,"Gold Trade Journal"),r.createElement("button",{onClick:function(){var e={id:Date.now(),ticker:"GOLD",entryDatetime:pe()(null),longShort:"",lotSize:"",trend4h:"u",trend15m:"u",trend3m:"u",tierPricingLevel:"",entry:"",takeProfit:"",stopLoss:"",exitDatetime:pe()(null),exitPrice:"",gainLoss:"",setup:"",comment:"","1mScreenshot":"","3mScreenshot":"","15mScreenshot":"",lostTest:!1,imbalance:!1,inducement:!1,badTrade:!1,newsImpactedTrade:!1,overnightFee:!1};n([].concat(Ne(t),[e])),i(e.id)}},"Add entry"),r.createElement("table",{className:"trade-journal-table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("td",{colSpan:2},"Ticker"),r.createElement("td",null,"Entry datetime"),r.createElement("td",null,"Long/Short"),r.createElement("td",null,"Lot size"),r.createElement("td",null,"4h trend"),r.createElement("td",null,"15m trend"),r.createElement("td",null,"3m trend"),r.createElement("td",null,"3m tier pricing level"),r.createElement("td",null,"Entry"),r.createElement("td",null,"Take profit"),r.createElement("td",null,"Stop loss"),r.createElement("td",null,"Exit datetime"),r.createElement("td",null,"Exit price"),r.createElement("td",null,"Gain/Loss"),r.createElement("td",{"data-tooltip-id":"setup-tooltip"},"Setup"),r.createElement("td",null,"Comment"),r.createElement("td",null,"1m Screenshot"),r.createElement("td",null,"3m Screenshot"),r.createElement("td",null,"15m Screenshot"),r.createElement("td",null,"Lost test?"),r.createElement("td",null,"Imbalance?"),r.createElement("td",null,"Inducement?"),r.createElement("td",null,"Bad trade?"),r.createElement("td",null,"News impacted trade?"),r.createElement("td",null,"Overnight fee?"))),r.createElement("tbody",null,t.map((function(e){return r.createElement("tr",{key:e.id},r.createElement("td",null,r.createElement("button",{onClick:function(){return r=e.id,void n(t.filter((function(e){return e.id!==r})));var r}},"Remove")),r.createElement("td",null,r.createElement(de,{value:e.ticker,onChange:function(t){return l(e.id,"ticker",t.target.value)},autoFocus:e.id===a,readOnly:!0})),r.createElement("td",null,r.createElement(Te,{label:"Entry datetime",value:e.entryDatetime,onChange:function(t){return l(e.id,"entryDatetime",t)}})),r.createElement("td",null,r.createElement(de,{value:e.longShort,onChange:function(t){return l(e.id,"longShort",t.target.value)}})),r.createElement("td",null,r.createElement(de,{value:e.lotSize,onChange:function(t){return l(e.id,"lotSize",t.target.value)}})),r.createElement("td",null,r.createElement(ve,{value:e.trend4h,onChange:function(t){return l(e.id,"trend4h",t.target.value)},options:Ie})),r.createElement("td",null,r.createElement(ve,{value:e.trend15m,onChange:function(t){return l(e.id,"trend15m",t.target.value)},options:Ie})),r.createElement("td",null,r.createElement(ve,{value:e.trend3m,onChange:function(t){return l(e.id,"trend3m",t.target.value)},options:Ie})),r.createElement("td",null,r.createElement(de,{value:e.tierPricingLevel,onChange:function(t){return l(e.id,"tierPricingLevel",t.target.value)}})),r.createElement("td",null,r.createElement(de,{value:e.entry,onChange:function(t){return l(e.id,"entry",t.target.value)}})),r.createElement("td",null,r.createElement(de,{value:e.takeProfit,onChange:function(t){return l(e.id,"takeProfit",t.target.value)}})),r.createElement("td",null,r.createElement(de,{value:e.stopLoss,onChange:function(t){return l(e.id,"stopLoss",t.target.value)}})),r.createElement("td",null,r.createElement(Te,{label:"Exit datetime",value:e.exitDatetime,onChange:function(t){return l(e.id,"exitDatetime",t)}})),r.createElement("td",null,r.createElement(de,{value:e.exitPrice,onChange:function(t){return l(e.id,"exitPrice",t.target.value)}})),r.createElement("td",null,r.createElement(de,{value:e.gainLoss,onChange:function(t){return l(e.id,"gainLoss",t.target.value)}})),r.createElement("td",null,r.createElement(de,{value:e.setup,onChange:function(t){return l(e.id,"setup",t.target.value)}})),r.createElement("td",null,r.createElement(de,{value:e.comment,onChange:function(t){return l(e.id,"comment",t.target.value)}})),r.createElement("td",null,r.createElement(de,{value:e["1mScreenshot"],onChange:function(t){return l(e.id,"1mScreenshot",t.target.value)}})),r.createElement("td",null,r.createElement(de,{value:e["3mScreenshot"],onChange:function(t){return l(e.id,"3mScreenshot",t.target.value)}})),r.createElement("td",null,r.createElement(de,{value:e["15mScreenshot"],onChange:function(t){return l(e.id,"15mScreenshot",t.target.value)}})),r.createElement("td",null,r.createElement("input",{type:"checkbox",checked:e.lostTest,onChange:function(){return l(e.id,"lostTest",!e.lostTest)}})),r.createElement("td",null,r.createElement("input",{type:"checkbox",checked:e.imbalance,onChange:function(){return l(e.id,"imbalance",!e.imbalance)}})),r.createElement("td",null,r.createElement("input",{type:"checkbox",checked:e.inducement,onChange:function(){return l(e.id,"inducement",!e.inducement)}})),r.createElement("td",null,r.createElement("input",{type:"checkbox",checked:e.badTrade,onChange:function(){return l(e.id,"badTrade",!e.badTrade)}})),r.createElement("td",null,r.createElement("input",{type:"checkbox",checked:e.newsImpactedTrade,onChange:function(){return l(e.id,"newsImpactedTrade",!e.newsImpactedTrade)}})),r.createElement("td",null,r.createElement("input",{type:"checkbox",checked:e.overnightFee,onChange:function(){return l(e.id,"overnightFee",!e.overnightFee)}})))})))),t.length>0&&r.createElement(je,{rows:t}),r.createElement(se.m_,{id:"setup-tooltip"},r.createElement("div",null,r.createElement("p",null,"Setup type"),r.createElement("ul",null,r.createElement("li",null,"1. Spike model"),r.createElement("li",null,"2. FBoS"),r.createElement("li",null,"3. Deeper mitigation"),r.createElement("li",null,"4. Tama setup"),r.createElement("li",null,"5. Hammer reversal"),r.createElement("li",null,"6. Inverted hammer reversal"),r.createElement("li",null,"7. NC"),r.createElement("li",null,"8. Other")))))}(0,o.render)(r.createElement(a.Kd,null,r.createElement(i.BV,null,r.createElement(i.qh,{path:"/",element:r.createElement(ne,null)}),r.createElement(i.qh,{path:"/projects",element:r.createElement(re,null)}),r.createElement(i.qh,{path:"/forex-trading",element:r.createElement(fe,null)}),r.createElement(i.qh,{path:"/trade-journal",element:r.createElement(Fe,null)}))),document.getElementById("app"))}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e].call(n.exports,n,n.exports,a),n.exports}a.m=r,e=[],a.O=(t,n,r,o)=>{if(!n){var i=1/0;for(f=0;f<e.length;f++){for(var[n,r,o]=e[f],l=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](n[c])))?n.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(f--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,r,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var l=2&r&&e;"object"==typeof l&&!~t.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,a.d(o,i),o},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[i,l,c]=n,u=0;if(i.some((t=>0!==e[t]))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(c)var f=c(a)}for(t&&t(n);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(f)},n=self.webpackChunkmy_website=self.webpackChunkmy_website||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=a.O(void 0,[655],(()=>a(1088)));i=a.O(i)})();