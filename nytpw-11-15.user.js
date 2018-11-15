// ==UserScript==
// @name         Remove NY Times PW
// @namespace    -
// @version      1
// @description  Removes the NY Times Pawall
// @author       solo
// @include      /^http(s?)://((www\.)?)nytimes\.com(.*)?/\d\d\d\d/(.+)$/
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];a
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('#app > div > div:nth-of-type(2) {display: none;}.css-mcm29f {position: initial;overflow: visible;}');
