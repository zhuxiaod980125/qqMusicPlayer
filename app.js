App({
  onLaunch: function () {
    // String1
  },
  globalData:{
    songData:null,
    songLists:null
  },
  setGlobalData: function(obj){
    for(var n in obj){
      this.globalData[n] = obj[n];
    }
  }
})