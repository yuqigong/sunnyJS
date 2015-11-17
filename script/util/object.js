/**
 * Created by yuqigong on 15/10/23.
 */

var ObjectUtil = {
    clone: function(obj) {

        var buf;

        if (obj instanceof Array) {
            buf = []; // 创建一个空的数组
            var i = obj.length;

            while (i--) {
                buf[i] = clone(obj[i]);
            }

            return buf;
        } else if (obj instanceof Object) {

            buf = {}; // 创建一个空对象

            for (var k in obj) { // 为这个对象添加新的属性
                buf[k] = clone(obj[k]);
            }

            return buf;
        } else {
            return obj;
        }
    }
};
