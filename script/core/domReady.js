(function() {
    /**
     * @see https://github.com/madrobby/zepto/blob/master/src/zepto.js#files
     * @type {Object}
     */
    var ReadyUtil = {
        states: /complete|loaded|interactive/,
        init: function(callback) {
            if (states.test(document.readyState) && document.body) callback($);
            else document.addEventListener('DOMContentLoaded', function() {
                callback($);
            }, false);
            return this;
        }
    };

    vecter.Ready = ReadyUtil.init;
})();
