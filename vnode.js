console.log('真是dome转为虚拟dome')
function VNode (tag, data, value, type) {
    this.tag = tag && tag.toLowerCase()
    this.data = data
    this.value = value
    this.type = type
    this.children = []
  }
  VNode.prototype.appendChild = function (vnode) {
    this.children.push(vnode)
  }
  function getVNode (node) {
    let nodeType = node.nodeType
    let _vnode = null
    if (nodeType === 1) {
      let tag = node.nodeName
      let attrs = node.attributes
      let _data = {}
      let attrLen = attrs.length
      for (let i = 0; i < attrLen; i++) {
        _data[attrs[i].nodeName] = attrs[i].nodeValue
      }
      _vnode = new VNode(tag, _data, undefined, nodeType)
      let childNodes = node.childNodes
      let childLen = childNodes.length
      for (let i = 0; i < childLen; i++) {
        _vnode.appendChild(getVNode(childNodes[i]))
      }
    }
    else if (nodeType === 3) {
      _vnode = new VNode(undefined, undefined, node.nodeValue, nodeType)
    }
    return _vnode
  }
  
  let root = document.querySelector('#root')
  let vroot = getVNode(root)
  console.log(vroot)
  