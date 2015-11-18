(function() {
    var FunctionUtil = {
        /**
         * 判断是否为数组
         * @param  {[type]}  obj [description]
         * @return {Boolean}     [description]
         */
        isArray: function(obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        },
        /**
         * HTML转义函数
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
         * 数组中取一个随机值
         * @param  {[type]} obj [description]
         * @return {[type]}     [description]
         */
        randomByArrayRange: function(obj) {
            if (!this.isArray(obj)) return;

            return obj[Math.floor(Math.random() * obj.length)];
        },
        /**
         * 随机取一个值
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
