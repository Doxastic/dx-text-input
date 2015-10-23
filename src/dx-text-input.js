
function dispatchResponse() {
    var value = this.value,
        event;
    if (value) {
        event = new CustomEvent('response', {
            cancelable: true,
            bubbles: true,
            detail: {
                value: this.value
            }
        });
        this.dispatchEvent(event);
    }
}

var prototype = Object.create(HTMLInputElement.prototype);

prototype.createdCallback = function() {
    
    this.type = 'text';

    this.addEventListener('keydown', function(event) {
        if (event.key == 'Enter' || event.which == 13 || event.keyCode == 13) {
            dispatchResponse.call(this);
        }
    });

    this.addEventListener('blur', function() {
        dispatchResponse.call(this);
    });

};

export default document.registerElement('dx-text-input', {

    extends: 'input',

    prototype: prototype

});