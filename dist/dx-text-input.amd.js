define(['exports', 'module'], function (exports, module) {
    'use strict';

    var prototype = Object.create(HTMLInputElement.prototype);

    prototype.createdCallback = function () {
        this.type = 'text';
    };

    module.exports = document.registerElement('dx-text-input', {

        'extends': 'input',

        prototype: prototype

    });
});