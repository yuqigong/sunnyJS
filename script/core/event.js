/**
 * Created by yuqigong on 15/10/23.
 */

var EventUtil = {
    /**
     * 跨浏览器的注册元素事件监听器方法
     * @param element 操作的元素
     * @param type 事件名称
     * @param handler 事件处理程序
     */
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    /**
     * 跨浏览器的移除元素事件监听器方法
     * @param element 操作的元素
     * @param type 事件名称
     * @param handler 事件处理程序
     */
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    /**
     * 加载多个事件函数
     * @param func
     */
    addLoadEvent: function(func) {
        var oldOnload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            oldOnload();
            func();
        }
    },
    /**
     * 获取事件本身的引用
     * @param event
     * @returns {*}
     */
    getEvent: function(event) {
        return event ? event : window.event;
    },
    /**
     * 获取该事件的目标元素的引用
     * @param event
     * @returns {*|Object}
     */
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    /**
     * 跨浏览器的取消事件传递后的默认处理方法
     * @param event
     */
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            // 在IE下,通过设置event对象的returnValue为false即可
            event.returnValue = false;
        }
    },
    /**
     * 跨浏览器的停止事件传递的方法
     * @param event
     */
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            // 在IE下,通过设置event对象的cancelBubble为true即可
            event.cancelBubble = true;
        }
    }
};
