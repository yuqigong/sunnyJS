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
    escapeTag: function(html) {
        var replacements = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '\'': '&quot;'
        };
        return text.replace(/[<>&']/g, function(character) {
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
     * 在一个区间内取一个随机值
     * @param  {[type]} min [description]
     * @param  {[type]} max [description]
     * @return {[type]}     [description]
     */
    randomByMaxRange: function(min, max) {
    	if (!min || !max) return;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
