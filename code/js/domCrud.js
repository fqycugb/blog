/**
 * 查找节点
 * @param {*} name
 * name: id,class,tagname
 * 调用示例 findNode('#root')或者findNode('div')
 */
const findNode = function(name){
    return document.querySelector(name)
}
/**
 * 创建一个节点
 * @param {*} tagName, attrObj
 * name: 标签名
 * attrObj: 属性名
 * 调用示例: createNode('div'), createNode('div',{id:'first',innerHTML:'helloworld'})
 */
const createNode = function(tagName,attrObj){
    let node = document.createElement(tagName);
    for(let key in attrObj){
        // 添加样式类
        if(key==='className') node.classList.add(key);
        node[key]=attrObj[key];
    }
    return node;
}
/**
 * 插入一个节点
 * @param {*} parentNode,newNode
 * parentNode: 要插入的父节点
 * newNode: 要插入的节点
 * 调用示例: insertNode(root,node2)
 */
const insertNode = function(parentNode,newNode){
    parentNode.appendChild(newNode);
}
/**
 * 替换一个节点
 * @param {*} parentNode,newNode,oldNode
 * parentNode: 要替换节点的父节点
 * newNode: 替换后的节点
 * oldNode: 替换前的节点
 * 调用示例: replaceNode(root,node1,node2);
 * 注意：第二个参数和第三个参数不可调换位置
 */
const replaceNode = function(parentNode,newNode,oldNode){
    parentNode.replaceChild(newNode,oldNode)
}
/**
 * 移除一个节点
 * @param {*} sourceNode,targetNode
 * sourceNode: 要移除节点的父节点
 * targetNode: 需要被移除的节点
 * 调用示例: removeNode(root,node1);
 */
const removeNode = function(sourceNode,targetNode){
    sourceNode.removeChild(targetNode)
}
/**
 * 渲染一段dom
 * @param {*} node htmlStr
 * node: 需要插入的父节点
 * htmlStr: dom字符串
 * 调用示例: renderDom(findNode('#root'),'<div id="myDiv">myDiv</div>');
 */
const renderDom = function(node, htmlStr){
    node.innerHTML=htmlStr;
}