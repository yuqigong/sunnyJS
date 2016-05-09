(function() {
    var FunctionUtil = {
        /**
         * [getFunctionName 获取函数名称，兼容 IE]
         * @param  {Function} fn [接受一个函数]
         * @return {[String]}      [函数名]
         */
        getFunctionName: function(fn) {
            if (fn.name !== undefined) return fn.name;
            var s = fn.toString();
            s = s.substr('function '.length);
            s = s.substr(0, s.indexOf('('));
            return s;
        },
        /**
         * [isArray 判断是否为数组]
         * @param  {[type]}  obj [description]
         * @return {Boolean}     [description]
         */
        isArray: function(obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        },
        /**
         * [unescape HTML转义函数]
         * @param  {[type]} html [description]
         * @return {[type]}      [description]
         */
        unescape: function(html) {
            var replacements = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;',
                '`': '&#x60;'
            };
            return html.replace(/[<>&']/g, function(character) {
                return replacements[character];
            });
        },
        /**
         * [randomByArrayRange 数组中取一个随机值]
         * @param  {[type]} obj [description]
         * @return {[type]}     [description]
         */
        randomByArrayRange: function(obj) {
            if (!this.isArray(obj)) return;

            return obj[Math.floor(Math.random() * obj.length)];
        },
        /**
         * [randomByMaxRange 随机取一个值]
         * @param  {[type]} min [description]
         * @param  {[type]} max [description]
         * @return {[type]}     [description]
         * @see  {[_.random]} http://underscorejs.org/docs/underscore.html
         */
        randomByMaxRange: function(min, max) {
            if (max == null) {
                max = min;
                min = 0;
            }

            return min + Math.floor(Math.random() * (max - min + 1));
        }
    };

    vecter.Function = FunctionUtil;
})();
