/**
 * Created by alone on 2017/6/9.
 */
$(function () {

    function getBodyWidth() {
        var width = parseInt($('body').css('width').substr(0, $('body').css('width').length - 2));
        return width;
    }
    //            点击之后，隐藏左侧导航栏
    $('html').click(function (e) {
        var width = $('.small_left_nav').css('width');
        if (e.clientX > parseInt(width.substr(0, width.length - 2))) {
            var to_left = parseInt(width.substr(0, width.length - 2)) + 60;
            if (isShow) {
                var final = (-to_left) + "px";
                $('.menu .ham').css({
                    "background-color": "#00b19e",
                    transform: "rotateZ(0deg)", top: "16px", height: "1.5px"
                });
                $('.menu').removeClass("final");
                $('.small_left_nav').animate({left: final}, 500, function () {
                    $('.small_left_nav').css({left: "-72%"});
                });
                $('body').css({"background-color": "white"});
                $('.next_title_content').css({"background-color": "white", opacity: 1});
                isShow = false;
            }
        }
    });
});