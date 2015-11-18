var vecter = {};
// Idiom
var sunny = (function() {
    var self = this;

    function _$(els) {
        this.elements = []; //把那些元素作为数组保存在一个实例属性中，
        for (var i = 0, len = els.length; i < len; i++) {
            var element = els[i];
            if (typeof element === 'string') {
                element = document.getElementById(element);
            }
            this.elements.push(element);
        }
    }

    _$.prototype = vecter;

    return new _$(arguments);
})();

window.sunny = window.sunny.$ = sunny;
window.$ === undefined && (window.$ = sunny);
