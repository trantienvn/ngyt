function getRandomArbitrary(_0xf028x2, _0xf028x3) {
    return Math.floor(Math.random() * (_0xf028x3 - _0xf028x2)) + _0xf028x2
}

function chayngay() {
    setInterval(function () {
        var _0xf028x5 = $(document).height();
        var _0xf028x6 = $(document).width();
        var _0xf028x7 = getRandomArbitrary(0, _0xf028x6);
        var _0xf028x8 = getRandomArbitrary(4000, 6000);
        var _0xf028x9 = Math.random() * (1 - 0.2) + 0.2;
        var _0xf028xa = getRandomArbitrary(5, 20);
        var _0xf028xb = getRandomArbitrary(_0xf028x7 - 100, _0xf028x7 + 100);
        var _0xf028xc = document.createElement("span");
        $(_0xf028xc).addClass("snow-item fa fa-heart").css({
            'position': "absolute",
            'z-index': "auto",
            'color': "#ff0000",
            'display': "block",
            'top': 0,
            'left': _0xf028x7,
            'opacity': _0xf028x9,
            'font-size': _0xf028xa + "px",
            'padding': "12px"
        }).appendTo("body").animate({
            'top': _0xf028x5 - _0xf028xa,
            'left': _0xf028xb
        }, {
            duration: _0xf028x8,
            easing: "linear",
            complete: function () {
                $(this).fadeOut("fast", function () {
                    $(this).remove()
                })
            }
        })
    }, 500)
}
$(document).ready(function () {
// Láº¥y URL hiá»n táº¡i


// Kiá»m tra xem token cÃ³ tá»n táº¡i khÃ´ng
    $.ajax().done(function () {
        $("#loading").fadeOut(1000)
    }).fail(function () {
        console.log("error")
    });
    $("#btn-matkhau").click(function (_0xf028xd) {
        let password = $("#password");
        let _0xf028xf = $("#error-mess");
        let _0xf028x10 = $(this).data("id");
        const pid = window.location.href.slice(-8);
        if (password.val() == "") {
            password.focus();
            _0xf028xf.html("Bạn ơi quên nhập mật khẩu nè ❤").css("color", "red")
        } else {
            $("#btn-matkhau").html("Đồng ý").removeAttr("disabled");
            loadContent("yourPassword", function(data) {
                // Handle successful response
                console.log('Data in the callback:', data);
                obj = data;
              }, function(error) {
                // Handle error
                console.error('Error in the callback:', error);
              });
                if (obj.status == 99) {
                    $(".box").fadeOut("fast");
                    $(".flower-footer").css("opacity", 1);
                    $("#sun").css("opacity", 1);
                    setTimeout(() => {
                        $("#bee").css({
                            'opacity': 1,
                            'animation-name': "bee_fly",
                            'animation-duration': "10s",
                            'animation-fill-mode': "forwards"
                        })
                    }, 1000);
                    setTimeout(() => {
                        $(".letter").show(500, function () {
                            $("#bee").hide("fast")
                        })
                    }, 10000)
                } else {
                    _0xf028xf.html(obj.messages).css("color", "red")
                }
        }
    });
    $("#password").keyup(function (_0xf028xd) {
        $("#error-mess").html("Mật khẩu phải ghi liền không dấu\*").css("color", "#979797")
    });
    $(".letter").click(function (_0xf028xd) {
        $(".letter").hide("fast", function () {
            $(".box2").addClass("animate__backInUp").show(400);
            chayngay()
        })
    })
})