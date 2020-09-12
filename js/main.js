var date_confession = new Date('2020/07/08 20:31')
var date_now, total, day, hour, min, sec

var date = new Date()

// 配置today卡片
var card_date = new Vue({
  el: '#card_date',
  data: {
    date: date.getMonth() + ' 月 ' + date.getDay() + ' 日 ' + '，星期' + '日一二三四五六'.charAt(date.getDay()),
    weather_tongliang: '正在获取铜梁区天气...',
    weather_xinyi: '正在获取信宜市天气...'
  }
})

// 获取铜梁区天气
axios.get('https://v0.yiketianqi.com/api?version=v61&appid=77455165&appsecret=8z4CwkqM&cityid=101042800')
  .then(res => {
    var weather_tongliang = res.data
    card_date.weather_tongliang = '铜梁区：' + weather_tongliang.win + '，' + weather_tongliang.wea + '，' + weather_tongliang.tem + ' ℃'
  })
  .catch(err => {
    console.log('获取天气发生错误: ' + err)
  })

// 获取信宜市天气
axios.get('https://v0.yiketianqi.com/api?version=v61&appid=77455165&appsecret=8z4CwkqM&cityid=101282005')
  .then(res => {
    var weather_xinyi = res.data
    card_date.weather_xinyi = '信宜市：' + weather_xinyi.win + '，' + weather_xinyi.wea + '，' + weather_xinyi.tem + ' ℃'
  })
  .catch(err => {
    console.log('获取天气发生错误: ' + err)
  })

// 底部时间
var loveDate = new Vue({
  el: '#love_date',
  data: {
    title: '页面加载于 ' + new Date().toLocaleString(),
    message: "",
  }
})

// 每秒更新底部时间
setInterval(() => {
  date_now = new Date()
  total = (date_now.getTime() - date_confession.getTime()) / 1000
  day = parseInt(total / (60 * 60 * 24))
  hour = parseInt((total - day * 60 * 60 * 24) / (60 * 60))
  min = parseInt((total - day * 60 * 60 * 24 - hour * 60 * 60) / (60))
  sec = parseInt(total - day * 60 * 60 * 24 - hour * 60 * 60 - min * 60)
  loveDate.message = day + ' 天 ' + hour + ' 小时 ' + min + ' 分钟 ' + sec + ' 秒'
})