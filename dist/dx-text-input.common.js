'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var prototype = Object.create(HTMLInputElement.prototype);

prototype.createdCallback = function () {
    this.type = 'text';
};

exports['default'] = document.registerElement('dx-text-input', {

    'extends': 'input',

    prototype: prototype

});
module.exports = exports['default'];