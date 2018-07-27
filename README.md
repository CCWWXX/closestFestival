# javascript获取最近的节日与其距离的时间
 该插件可获取到离今天最近的节假日距离的时间与节日名<br>
 节假日的数组可自己设计，添加自己想要的节假日，不写则使用默认的节日数组<br>
 同时还可以比较两个日期大小，两个日期相差天数<br>

## How to use
```
const date = require('path/to/date.js');
//获取最近的节日与其距离的时间
console.log(closestFestival(today,festArry))
console.log(closestFestival('',festArry))
console.log(closestFestival())
//比较日期大小，d1是否大于等于d2
console.log（date.compareDate(d1,d2)）
//日期相差天数,d1距离d2多少天
console.log（date.minusDays(d1,d2)）
```
## params
参数描述

| param | type | description |
| ---------- | --------- | -------- |
| today | String | 某个日期，格式为‘20xx-xx-xx’，不填为默认今天的日期 |
| festArry | Object | 节假日数组对象，格式必须为插件里面Festivals的格式，填此参数时必须存在第一个参数 |
| d1 | String| 第一个日期 |
| d2 | String| 第二个日期 |

## todo
- [ ] 获取最近的节日与其距离的时间
- [ ] 比较日期大小
- [ ] 日期相差天数
