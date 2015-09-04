// 定数
var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;


$(function() {
  // キーボードイベント
  $(document).on("keydown", function(event) {
    switch(event.keyCode) {
      case LEFT:
        // console.log("left");
        // 取得して
        var left = $(".btn-viewer-left");
        // 左クリック(eachにしないとなぜかだめ)
        left.each(function(){this.click()});
        break;
      case RIGHT:
        // console.log("right");
        // 取得して
        var right = $(".btn-viewer-right");
        // 右クリック(eachにしないとなぜかだめ)
        right.each(function(){this.click()});
        break;
      case UP:
        // console.log("up");
        break;
      case DOWN:
        // console.log("down");
        break;
    }
  });
});

