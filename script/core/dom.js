/**
 * Created by yuqigong on 15/10/28.
 */

var DomUtil = {
    /**
     * 通过id查找元素
     * @param  {[type]} id 元素的id
     * @return {[type]}    [description]
     */
    $: function(id) {
        var elements = new Array();
        // 将传来的参数进行遍历
        for (var i = 0; i < arguments.length; i++) {
            var element = arguments[i];
            // 若参数为字符串类型，则取得该参数的id
            if (typeof element == 'string') {
                element = document.getElementById(element);
            }
            // 若参数长度为1，即只传递进来一个参数，则直接返回
            if (arguments.length == 1) {
                return element;
            }
            // 若有多个参数传递进来，则将处理后的值压入elements数组中
            elements.push(element);
        }
        // 返回处理后的参数
        return elements;
    },
    /**
     * 通过classname查找元素
     * @param  {[type]} className [类名]
     * @param  {[type]} tag       [标签名]
     * @return {[type]}           [description]
     */
    getElementsByClassName: function(className, tag) {
        // 对tag进行过滤，取出所有对象，如取出所有input类型对象。
        var allTags = document.getElementsByTagName(tag);
        var matchingElements = new Array();

        // 正则表达式
        className = className.replace(/\-/g, "\\-");
        var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");

        var element;

        // 将取出的tag对象存入数组中。
        for (var i = 0; i < allTags.length; i++) {
            element = allTags[i];
            if (regex.test(element.className)) {
                matchingElements.push(element);
            }
        }
        return matchingElements;
    },
    /**
     * 在目标元素后面插入
     * @param  {[type]} newElement    [description]
     * @param  {[type]} targetElement [description]
     * @return {[type]}               [description]
     */
    insertAfter: function(newElement, targetElement) {
        // 获取 targetElement 的父节点
        var parent = targetElement.parentNode;
        // 判断 targetElement 节点是否为其父节点的最后一个子节点
        if (parent.lastChild == targetElement) {
            // 若是最后一个子节点，则直接把 newElement 加为 targetElement 父节点的子节点即可
            parent.appendChild(newElement);
        } else {
            // 若不是最后一个子节点，则先获取 targetElement 节点的下一个兄弟节点，然后调用 insertBefore() 方法
            parent.insertBefore(newElement, targetElement.nextSibling);
        }
    },
    /**
     * 为元素添加class
     * @param {[type]} element [description]
     * @param {[type]} value   [description]
     */
    addClass: function(element, value) {
        if (!element.className) {
            element.className = value;
        } else {
            var newClassName = element.className;
            newClassName += ' ';
            newClassName += value;
            element.className = newClassName;
        }
    }
};
