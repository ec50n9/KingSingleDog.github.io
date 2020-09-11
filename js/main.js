var date_confession = new Date('2020/07/08 20:31')
var date_now, total, day, hour, min, sec

var date = new Vue({
  el: '#today_date',
  data: {
    message: '星期' + '日一二三四五六'.charAt(new Date().getDay()) + "，阴"
  }
})

var title = new Vue({
  el: '.header',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})

var loveDate = new Vue({
  el: '#love_date',
  data: {
    title: '页面加载于 ' + new Date().toLocaleString(),
    message: "goout",
  }
})

setInterval(() => {
  date_now = new Date()
  total = (date_now.getTime() - date_confession.getTime()) / 1000
  day = parseInt(total / (60 * 60 * 24))
  hour = parseInt((total - day * 60 * 60 * 24) / (60 * 60))
  min = parseInt((total - day * 60 * 60 * 24 - hour * 60 * 60) / (60))
  sec = parseInt(total - day * 60 * 60 * 24 - hour * 60 * 60 - min * 60)
  loveDate.message = day + '天' + hour + '小时' + min + '分钟' + sec + '秒'
})