console.log('解析url')
function parseQueryString(url){
    if(typeof url !== 'string') throw new Error('invalid url')
    const search = decodeURIComponent(url).split('?')[1];
    if(!search) return {};
    return search.split('&').reduce((pre, cur) => {
      const [key, value] = cur.split('=');
      pre[key] = value;
      return pre;
    }, {});
}
console.log(parseQueryString("http://iauto360.cn/index.php?user=0&id=1&ccc=2"))

