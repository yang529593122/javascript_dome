const getMonths = (startDateStr, endDateStr) => {
    let startTime = getDate(startDateStr).getTime()
    const endTime = getDate(endDateStr).getTime()
    const result = []
    while (startTime < endTime) {
      let curDate = new Date(startTime)
      result.push(formatDate(curDate))
      curDate.setMonth(curDate.getMonth() + 1)
      startTime = curDate.getTime()
    }
    return result.slice(1)
  }
  const getDate = (dateStr) => {
    const [year, month] = dateStr.split('-')
    return new Date(year, month - 1)
  }
  const formatDate = (date) => {
    return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}`
  }
  console.log(getMonths('2017-08', '2018-12'))