
import {Item} from './item'

export let mockList = []

const makeRandDay = (now = new Date()) => {
  let rdFactor = Math.random() // [0,1)
  let randDay = (rdFactor-0.5)*2*7 * 86400*1000 // -7~7天随机

  return new Date(now*1+randDay)
}

for(let i=0; i<20; i++) {
  let contents = 'do this, do that. idx'+i+' '+Math.random()
  let item = new Item(contents)
  item.doneDate = makeRandDay()
  item.postpone = makeRandDay(item.doneDate*1+7*86400*1000)
  mockList[i] = item
}
