var date = new Vue({
    el: '#today_date',
    data: {
      message: '星期' + '日一二三四五六'.charAt(new Date().getDay()) + "，阴"
    }
  })

var title = new Vue({
    el: '.header',
    data:{
        message: '页面加载于 ' + new Date().toLocaleString()
    }
})
