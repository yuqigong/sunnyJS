/**
 * Created by yuqigong on 15/10/23.
 */

var ArrayUtil = {
    /**
     * 数组去重
     * @param arr
     * @returns {Array}
     */
    unique: function(arr) {
        var n = []; // 一个新的临时数组

        for (var i = 0; i < arr.length; i++) { // 遍历当前数组
            // 如果当前数组的第i已经保存进了临时数组，那么跳过，
            // 否则把当前项push到临时数组里面
            if (n.indexOf(arr[i]) === -1) {
                n.push(arr[i]);
            }
        }

        return n;
    },
    /**
     * 数组合并
     * @param arr1
     * @param arr2
     * @returns {Array}
     */
    union: function(arr1, arr2) {
        if (!arr1 instanceof Array || !arr2 instanceof Array) {
            return;
        }

        Array.prototype.push.apply(arr1, arr2);
        return arr1;
    },
    /**
     * 取最大值
     * @param array
     * @returns {number}
     */
    max: function(array) {
        return Math.max.apply(null, array);
    },
    /**
     * 取最小值
     * @param array
     * @returns {number}
     */
    min: function(array) {
        return Math.min.apply(null, array);
    },
    /**
     * 比较两个数组
     * @param a
     * @param b
     * @returns {boolean}
     */
    equalArrays: function(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
};
