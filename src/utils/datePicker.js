export function isLastMonthOrOlder(selectedDate) {
    if (!selectedDate) return false
    
    const today = new Date()
    const selected = new Date(selectedDate)
    
    // 获取当前月份的第一天
    const currentMonthFirstDay = new Date(today.getFullYear(), today.getMonth(), 1)
    
    // 判断是否早于当前月份
    return selected < currentMonthFirstDay
  }