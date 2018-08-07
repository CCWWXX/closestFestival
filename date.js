let Festivals = [{name:"元旦",date:"2018-01-01"},{name:"情人节",date:"2018-02-14"},{name:"妇女节",date:"2018-03-08"},{name:"植树节",date:"2018-03-12"},{name:"愚人节",date:"2018-04-01"},{name:"劳动节",date:"2018-05-01"},{name:"青年节",date:"2018-05-04"},{name:"520",date:"2018-05-20"},{name:"儿童节",date:"2018-06-01"},{name:"建军节",date:"2018-08-01"},{name:"教师节",date:"2018-09-10"},{name:"国庆节",date:"2018-10-01"},{name:"万圣节",date:"2018-11-01"},{name:"圣诞节",date:"2018-12-25"}]
let date = {
	compareDate(d1,d2){
	 return ((new Date(d1.replace(/-/g,"\/"))) >= (new Date(d2.replace(/-/g,"\/"))));	
	},
	minusDays(d1,d2){
		let t1 = new Date(d1.replace(/-/g,"\/")).getTime()//IOS只能识别2017/01/02这种格式
		let t2 = new Date(d2.replace(/-/g,"\/")).getTime()
		let dateTime = 1000*60*60*24;
		let minusDays = Math.floor(((t2-t1)/dateTime));
		return(minusDays)
	},
	closestFestival(today,festArry){
	/**
	 * 获取当前日期
	 */
		let now = new Date()
		let month =( now.getMonth() + 1).toString()
		if(month.length <2 ){
		  month = "0"+month
		}
		let nowDate = now.getFullYear()+'-'+month+'-'+now.getDate()

		if(!today||today == ''){
			today = nowDate
		}
		if(!festArry){
			festArry = Festivals
		}else if(typeof(festArry) != 'object' ){
			console.log("festArry必须为对象")
			return
		}
		let arr = []
		for(let i=0;i<festArry.length;i++){
		  let list = {}
		  list.name = festArry[i].name;
		  list.day = this.minusDays(today,festArry[i].date)
		  if(list.day<0){
		    list.day = 365 - list.day//相加
		  }
		  arr.push(list)
		}
		 let compare = (property) => {
		      return function(a,b){
		          let value1 = a[property];
		          let value2 = b[property];
		          return value1 - value2;
		      }
		  }
		  arr = arr.sort(compare('day'))
		  return arr[0]		
	}
}
module.exports = date
