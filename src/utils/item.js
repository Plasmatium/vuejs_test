// this is a 'Item' class defination

import {to23oclk, dateDiff} from '../utils/date_utils'

export class Item {
  constructor (contents) {
    this.doneDate = null
    this.postpone = null

    this.done = false
    this.contents = contents

    Object.defineProperties(this, {state: {
      /* 根据doneDate、postpone和now来判断当前的状态和颜色
       * 1. 如果过期且有推迟，则边框红色，提示标签为橙至红过渡
       * 2. 如果过期且无推迟，则边框为红色，提示标签为红色
       * 3. 如果未过期，则为绿色至橙色过渡色
       * 4. 以上颜色都由0～1~2系数表示，可由css定制，0为绿，
       * 1为橙，2为红
       * postpone必大于doneDate，且postpone默认情况下和doneDate
       * 一致（未设置doneDate，两者皆为null，设置了doneDate未设置
       * postpone，postpone同dondDate
       */
      get: () => {
        let now = new Date()
        let rslt = {}

        // 无期限，永远为绿色
        if (this.doneDate === null) {
          rslt.flag = rslt.border = 0
          return rslt
        }

        // 已过期postpone，全红
        if (now >= this.postpone) {
          rslt.flag = rslt.border = 2
          return rslt
        }

        let range30Days = 30 * 86400 * 1000
        // 在doneDate之前
        if (now < this.doneDate) {
          let colorFactor = (this.doneDate - now)/range30Days
          rslt.flag = rslt.border = colorFactor
          return rslt
        }

        // 在doneDate和postpone之间
        let dpRange = postpone - doneDate
        let overtime = now - doneDate
        let colorFactor = overtime / dpRange
        rslt.flag = colorFactor
        rslt.border = 2
        return rslt
      }
    }})
  }
}
