/**
 * Created by yuqigong on 15/10/23.
 */

(function() {
    var StringUtil = {
        /**
         * 去除字符串两边的空白
         * @param  {[type]} str [description]
         * @return {string}     [description]
         * @see http://www.cnblogs.com/rubylouvre/archive/2009/09/18/1568794.html
         */
        trim: function(str) {
            var str = str.replace(/^\s\s*/, ''),
                ws = /\s/,
                i = str.length;
            while (ws.test(str.charAt(--i)));
            return str.slice(0, i + 1);
        }
    };

    vecter.String = StringUtil;
})();
