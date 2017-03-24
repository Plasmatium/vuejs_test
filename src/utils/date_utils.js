/* This file is used for date relevant operation
 *
 *
 */
/* 算两个日期差值，精确到小时，分钟数四舍五入到小时保留1位 */
export const dateDiff = (t1, t2) => {
  if (t2 === null) return null

  let rslt = {}
  let diff = t1 - t2
  rslt.raw = diff
  rslt.sign = Math.sign(diff)

  absdiff = Math.abs(diff)/1000 // 规整到秒
  rslt.days = Math.round(absdiff/86400)*rslt.sign // 一天有86400秒
  left = absdiff%86400
  rslt.hours = (left/3600).toFixed(1)

  return rslt
}

/* 将时间规整，过期判断时间都是晚上23点 */
export const to23oclk = (t) => {
  t.setHours(23)
  t.setMinutes(0)
  t.setSeconds(0)
  t.setMilliseconds(0)
}
