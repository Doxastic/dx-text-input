System.register([], function (_export) {
    'use strict';

    var prototype;
    return {
        setters: [],
        execute: function () {
            prototype = Object.create(HTMLInputElement.prototype);

            prototype.createdCallback = function () {
                this.type = 'text';
            };

            _export('default', document.registerElement('dx-text-input', {

                'extends': 'input',

                prototype: prototype

            }));
        }
    };
});