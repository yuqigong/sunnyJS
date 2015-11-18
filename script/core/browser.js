(function() {
    var BrowserUtil = {
        /**
         * 判断是否是IE
         * @returns {boolean}
         */
        ie: function() {
            if (!+[1, ]) {
                return true;
            } else {
                return false;
            }
        },
        webkit: function() {
            return /webkit/.test(navigator.userAgent.toLowerCase());
        },
        ff: function() {
            return /firefox/.test(navigator.userAgent.toLowerCase());
        },
        op: function() {
            return /opera/.test(navigator.userAgent.toLowerCase());
        }
    };

    vecter.Browser = BrowserUtil;
})();
