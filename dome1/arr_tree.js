let areaArr = [
    { id: 10000, name: '中国'},
    { pid: 10000, id: 11000, name: '浙江省' },
    { pid: 11000, id: 11100, name: '杭州市' },
    { pid: 11100, id: 11101, name: '西湖区' },
    { pid: 11100, id: 11102, name: '萧山区' },
    { pid: 11000, id: 11200, name: '金华市' },
    { pid: 11200, id: 11201, name: '京东区' },
    { pid: 11200, id: 11202, name: '婺城区' },
    { pid: 10000, id: 12000, name: '湖南省' },
    { pid: 12000, id: 12100, name: '长沙市' },
    { pid: 12100, id: 12101, name: '长沙市区1' },
    { pid: 12100, id: 12102, name: '长沙市区2' },
    { pid: 12000, id: 12200, name: '岳阳市' },
    { pid: 12200, id: 12201, name: '岳阳市区1' },
    { pid: 12200, id: 12202, name: '岳阳市区2' }
  ]
  
  // 结构化数组: 将关系数组 areaArr 转为树形结构
  function mapArrayToTree (pidName, idName, arr, pid = null) {
    return arr.reduce((result, current) => {
      if((!pid && !current[pidName]) || (pid && current[pidName] == pid)){
        current.children = mapArrayToTree(pidName, idName, arr, current[idName])
        result.push(current)
      }
      return result
    }, [])
  }
  console.log(mapArrayToTree('pid','id',areaArr,pid = null),888)
  // 数组拍平：将树形结构转为关系化数组
  function flatTreeToArray (data) {
      return data.reduce((result, current) => {
        let {children, ...others} = current;
        result.push({...others})
        if(current.children){
          result = [...result, ...flatTreeToArray(current.children)]
        }
        return result
      },[])
  }
  console.log(flatTreeToArray(mapArrayToTree('pid','id',areaArr,pid = null)),999)