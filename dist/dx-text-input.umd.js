(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.dxTextInput = mod.exports;
    }
})(this, function (exports, module) {
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