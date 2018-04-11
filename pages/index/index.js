var API_URL = 'https://api.douban.com/v2/movie/top250'

Page({
  data: {
    title:"加载中...",
    movies:[]
  },
  onLoad:function(){
    var that = this;//容易出错的地方-1
    wx.showToast({
      title:"加载中...",
      icon:"loading",
      duration:10000
    });

    wx.request({
      url:API_URL,
      data:{},
      header:{
        'content-type':'json'
      },
      success:function(res){
        wx.hideToast();
        var data = res.data;
        that.setData({//容易出错的地方-1
          title: data.title,
          movies:data.subjects
        });
      
      }
    });
  }

})
