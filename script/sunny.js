var vecter = {};
// Idiom
var sunny = (function() {
    var self = this;

    function _$(things) {
        if (typeof things === 'function') {
        	vecter.Ready(things);
        } else {
            this.elements = []; //把那些元素作为数组保存在一个实例属性中，
            for (var i = 0, len = things.length; i < len; i++) {
                var element = things[i];
                if (typeof element === 'string') {
                    element = document.getElementById(element);
                }
                // 则将处理后的值压入elements数组中
                this.elements.push(element);
            }
        }
    }

    _$.prototype = vecter;

    return new _$(arguments);
})();

window.sunny = sunny;
window.$ === undefined && (window.$ = sunny);
