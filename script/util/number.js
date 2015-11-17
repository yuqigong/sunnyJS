/**
 * Created by yuqigong on 15/10/23.
 */

var NumberUtil = {
    /**
     * 加法
     * @param {[type]} arg [description]
     */
    add: function(arg) {
        var r1, r2, m;
        try {
            r1 = this.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg.toString().split('.')[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (this * m + arg * m) / m;
    },
    /**
     * 减法
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    sub: function(arg) {
        return this.add(-arg);
    },
    /**
     * 乘法
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    mul: function(arg) {
        var m = 0,
            s1 = this.toString(),
            s2 = arg.toString();
        try {
            m += s1.split('.')[1].length;
        } catch (e) {}
        try {
            m += s2.split('.')[1].length;
        } catch (e) {}
        return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
    },
    /**
     * 除法
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    div: function(arg) {
        var t1 = 0,
            t2 = 0,
            r1, r2;
        try {
            t1 = this.toString().split('.')[1].length;
        } catch (e) {}
        try {
            t2 = arg.toString().split('.')[1].length;
        } catch (e) {}
        with(Math) {
            r1 = Number(this.toString().replace('.', ''));
            r2 = Number(arg.toString().replace('.', ''));
            return (r1 / r2) * pow(10, t2 - t1);
        }
    },
}
