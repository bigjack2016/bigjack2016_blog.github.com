/**
 * Created by tengyx on 2016/11/24.
 */
;
//roleName=CAEQx7SZwgUaATAikASipJQ6MC1vdq0lUOf8tD8OZHdc9pHpjEmzXChXl8U9qu5ylIj0BGu3n1RStKjgri0xIDQK7TzrtmiBhp/rgtIq3Crqdii+NQMcDXfCi1rKhxJebp6krumsQa5KicSsElKoMeelRQGHspFMiVBNjIAp1hq7jBlS/YCYEJ0K3bG59Eug9MpVqUXMKrOvh95/2Gkuj6qWpCHih4OScb4YHxP0h8G5I2a19ccIFUZ4NudjqLNVBonXcV4wgq55WdzwD5OS2McdGwgTx/lSfo2YH/8kHx0JsPsiD7A1QZMFD1eeqQgVRng252OoCBVGeDbnY6jNH6BZ50jWgHzA5eWEXNnBHaKzqzf0WY9H11FGtxtQ5R3alv01nTTgtlphVPyOIYjgfFjdgYWCxDWGnSz3GSd8NZBwUFrMXLay6FGBNPWdmKsCbgLRm5qKd4ZwhRvzzloS522ZBbRpzw1p3+KfA25ZCBVGeDbnY6gIFUZ4NudjqO/PSEuHX/nxCBVGeDbnY6gIFUZ4NudjqG8j4KggN0wlxSNvmQM8iXQnbkOw1bmi3z8oaTA2jidfPFtTGbJrRS9LZVQBnafTrro6l8vV+lkkGZ7OM9NDPRPG3Zzz6QtoXQ76nViTMsgJEjWZdtUqju3tDwcA2SDC6CT0YM40TCmDgzIQbEvoMgDGIP01foS64f/kL80zJt8QMn1n1jzvuUg=&token=qYy56SceuKsyhjy5U7s3yWNe4EWxplcZzEDSz3zcfBo=
var WebConfig = '172.28.8.120:8099/hmagencyweb';
var url = window.location.href;
var infoArr = url.slice(url.indexOf('?') + 1).split('&');
var rolenameArr = infoArr[0].split('=');
var tokenArr = infoArr[1].split('=');
var rolename = decodeURIComponent(rolenameArr[1]);
var token = decodeURIComponent(tokenArr[1]);
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        // do nothing;
    } else {
        $('body').css("max-width", "640px");
    }
}
browserRedirect();

function delete_data(aa) {
    k--;
    var getNum = $(aa).attr('num');
    var list_data = $('.list_data');
    for (var i = 0; i < list_data.length; i++) {
        var bb = list_data[i].id;
        if (bb == getNum) {
            list_data[i].remove();
        }
    }
    var list_num = $('.list_num');
    for (var j = 0; j < list_num.length; j++) {
        if (j < 9) {
            list_num[j].innerHTML = '0' + (j + 1);
        } else {
            list_num[j].innerHTML = j + 1;
        }
    }
    list_data = $('.list_data');
    for (var m = 0; m < list_data.length; m++) {
        if (m < 9) {
            list_data[m].id = '0' + (m + 1);
        } else {
            list_data[m].id = m + 1;
        }
    }
    var delete_datas = $('.delete_data');
    for (var n = 0; n < delete_datas.length; n++) {
        if (n < 9) {
            delete_datas[n].setAttribute("num", '0' + (n + 1));
        } else {
            delete_datas[n].setAttribute("num", n + 1);
        }
    }
    accountNum();
}
function accountNum(that) {
    var sum = 0;
    var account_data = $('.account_data');
    for (var i = 0; i < account_data.length; i++) {
        if (parseInt(account_data[i].value)) {
            sum += parseInt(account_data[i].value);
        }
    }
    $('.total_account')[0].innerHTML = '总计：' + sum;
}
var k = 0;
$('.add_plus').click(function () {
    k++;
    if (k < 10) {
        $('.list_addnew').before('<li class="list_data" id="' + '0' + k + '"><span class="list_num">' + '0' + k + '</span><input class="rolename_data" type="text" value=""> <input class="account_data" type="tel" value="" onblur="accountNum(this);"><img src="images/delete.png" class="delete_data" num="' + '0' + k + '" onclick="delete_data(this);"></li>');
    } else {
        $('.list_addnew').before('<li class="list_data" id="' + '0' + k + '"><span class="list_num">' + k + '</span><input class="rolename_data" type="text" value=""> <input class="account_data" type="tel" value=""><img src="images/delete.png" class="delete_data" num="' + '0' + k + '" onclick="delete_data(this);"></li>')
    }
});

var WebConfig = '172.28.8.120:8099/hmagencyweb';
function giveGift(dd) {
    $(dd).parent().find('.give_rolename_data');
    var SellAgencyRoleName = $(dd).parent().find('.give_rolename_data')[0].innerHTML;
    var GiveCount = $(dd).parent().find('.give_account_data')[0].innerHTML;
    k++;
    if (k < 10) {
        $('.list_addnew').before('<li class="list_data" id="' + '0' + k + '"><span class="list_num">' + '0' + k + '</span><input class="rolename_data" type="text" value="' + SellAgencyRoleName + '"> <input class="account_data" type="tel" value="' + GiveCount + '"><img src="images/delete.png" class="delete_data" num="' + '0' + k + '" onclick="delete_data(this);"></li>');
    } else {
        $('.list_addnew').before('<li class="list_data" id="' + '0' + k + '"><span class="list_num">' + k + '</span><input class="rolename_data" type="text" value=""> <input class="account_data" type="tel" value=""><img src="images/delete.png" class="delete_data" num="' + '0' + k + '" onclick="delete_data(this);"></li>')
    }

}
$.ajax({
    type: 'POST',
    url: 'http://' + WebConfig + '/RubyLog/GetRecentSellInfo',
    async: false,
    dataType: 'json',
    data: {"rolename": rolename, "token": token},
    success: function (data) {
        var state = data.State;
        var value = data.Value;
        if (state == 1) {
            for (var i = 0; i < value.length; i++) {
                $('.recent_gift_list').append('<li class="recent_list_data"> <span class="give_rolename_data">' + value[i].SellAgencyRoleName + '</span> <span class="give_account_data">' + value[i].GiveCount + '</span> <span class="give_date_data">' + value[i].GiveTime + '</span> <img src="images/give_red.png" class="give_img" onclick="giveGift(this);"></li>')
            }
        }
    }
});
$('.gift_recent').on('click', function () {
    $('.gift_info').hide();
    $('.gift_recent').hide();
    $('.give_button').hide();
    $('.recent_give').show();
    $('.return_arrow').on('click', function () {
        $('.gift_info').show();
        $('.gift_recent').show();
        $('.give_button').show();
        $('.recent_give').hide();
    })
});

$('.give_confirm').on('click', function () {
    var Info = [];
    for (var i = 0; i < $('.rolename_data').length; i++) {
        Info[i] = {'RoleName': $('.rolename_data')[i].value, 'GoldCount': $('.account_data')[i].value};
        if ($('.rolename_data')[i].value == '') {
            alert('请输入角色名')
        } else if ($('.account_data')[i].value == '') {
            alert('请输入赠送数量')
        } else {
            $.ajax({
                type: 'POST',
                url: 'http://172.28.8.120:8099/hmagencyweb//Ruby/AddRuby',
                async: false,
                dataType: 'json',
                data: {jsonData: JSON.stringify(Info), "rolename": rolename, "token": token},
                success: function (data) {
                    if (data.State == 1) {
                        window.location.reload();
                    } else {
                        alert(data.Message)
                    }
                }
            })
        }
    }
});
$('.search_button').on('click', function () {
    $.ajax({
        type: 'POST',
        url: 'http://172.28.8.120:8099/hmagencyweb/RubyLog/GetSearchRecentSellInfo',
        async: false,
        dataType: 'json',
        data: {'rolename': $(".input_username").val(), "rolename": rolename, "token": token},
        success: function () {

        }
    })
});
function UserCtrl() {
    $('.bind_confirm').on('click', function () {
                            $.ajax({
                                type: 'POST',
                                url: 'http://' + WebConfig + '/Protect/BindPhoneNumberVerfiy',
                                async: false,
                                dataType: 'json',
                                data: {
                                    "phoneNumber": $(".bind_phone_num").val(),
                                    "captcha ": $('.bind_code_num').val(),
                                    "rolename": rolename,
                                    "token": token
                                },
                                success: function (data1) {
                                    // data1.state = 1;
                                    if (data1.State == 1) {
                                        $('.dialog').show();
                                        $('.dialog-confirm').on('click', function () {
                                            $('.backstage_container').show();
                                            $('.dialog').hide();
                                            $('.backstage_container1').hide();
                                            location.reload();
                                        });
                                    } else if(data1.State == 2){
                                            window.location.href = "file://172.28.8.120/wwwroot2/majiang.lianzhong.com/hmagencyweb/index.html"
                                    } else {
                                        alert(data1.Message);
                                    }
                                }
                          });
                     });
    $('.bindsuccess_unbind').on('click', function () {
                $('.backstage_container2').hide();
                $('.backstage_container3').show();
                $('.myPhoneNum')[0].innerHTML = phoneNumber;
                $('.getCode').on('click', function () {
                    $.ajax({
                        type: 'POST',
                        url: 'http://' + WebConfig + '/Protect/RemoveProtect',
                        async: false,
                        dataType: 'json',
                        data: {"rolename": rolename, "token": token, "phoneNumber": phoneNumber},
                        success: function (data4) {
                            if (data4.State == 1) {
                                $('.unbind_click').on('click', function () {
                                    $.ajax({
                                        type: 'POST',
                                        url: 'http://' + WebConfig + '/Protect/RemoveProtectVerfiy',
                                        async: false,
                                        dataType: 'json',
                                        data: {
                                            "captcha ": $('.get_code_num').val(),
                                            "rolename": rolename,
                                            "token": token
                                        },
                                        success: function (data5) {
                                            if (data5.State == 1) {
                                                $('.dialog2').show();
                                                $('.backstage_container3').hide();
                                                $('.backstage_container').show();
                                            } else if (data.State == 2) {
                                                 window.location.href = "file://172.28.8.120/wwwroot2/majiang.lianzhong.com/hmagencyweb/index.html"
                                            }else {
                                                alert(data5.Message)
                                            }
                                        }
                                    });
                                    $('.dialog2-confirm').on('click', function () {
                                        $('.dialog2').hide();
                                        location.reload();
                                    });
                                })
                            } else if (data.State == 2) {
                                window.location.href = "file://172.28.8.120/wwwroot2/majiang.lianzhong.com/hmagencyweb/index.html"
                            }else {
                                alert(data4.Message);
                            }
                        }
                    })
                });
         });
    $('.bind_sendCode').on('click', function () {
        $.ajax({
            type: 'POST',
            url: 'http://' + WebConfig + '/Protect/BindPhoneNumber',
            async: false,
            dataType: 'json',
            data: {
                "phoneNumber": $(".bind_phone_num").val(),
                "rolename": rolename,
                "token": token
            },
            success: function (data) {
                if (data.State == 1) {
                    
                } else if (data.State == 2) {
                    window.location.href = "file://172.28.8.120/wwwroot2/majiang.lianzhong.com/hmagencyweb/index.html"
                } else {
                    alert(data.Message);
                }
            }
        })
    });
    $('.bind_return').on('click', function () {
        $('.backstage_container1').hide();
        $('.backstage_container').show();
    });
    $('.bindsuccess_return').on('click', function () {
        $('.backstage_container').show();
        $('.backstage_container2').hide();
    })
}
function turn_square(){
    $('.off_square').on('click', function () {
                        $.ajax({
                            type: 'POST',
                            url: 'http://' + WebConfig + '/Protect/UpdateProtectState',
                            async: false,
                            dataType: 'json',
                            data: {"rolename": rolename, "token": token},
                            success: function (data) {
                                if (data.State == 1) {
                                    $('.off_protect').hide();
                                    $('.open_protect').show();
                                } else if (data.State == 2) {
                                    window.location.href = "file://172.28.8.120/wwwroot2/majiang.lianzhong.com/hmagencyweb/index.html"
                                } else if (data.state == 3){
                                    $('.backstage_container4').show();
                                    $('.backstage_container').hide();
                                } else {
                                    alert(data.Message);
                                }
                            }
                        })
                    });
    $('.open_square').on('click', function () {
        $.ajax({
            type: 'POST',
            url: 'http://' + WebConfig + '/Protect/UpdateProtectState',
            async: false,
            dataType: 'json',
            data: {"rolename": rolename, "token": token},
            success: function (data) {
                if (data.State == 1) {
                    $('.off_protect').show();
                    $('.open_protect').hide();
                } else if (data.State == 2) {
                    window.location.href = "file://172.28.8.120/wwwroot2/majiang.lianzhong.com/hmagencyweb/index.html"
                } else if (data.state == 3){
                    $('.backstage_container4').show();
                    $('.backstage_container').hide();
                } else {
                    alert(data.Message);
                }
            }
        })
    });
}
function Info() {
    $.ajax({
        type: 'POST',
        url: 'http://' + WebConfig + '/Account/GetAccountInfo',
        async: false,
        dataType: 'json',
        data: {"rolename": rolename, "token": token},
        success: function (data) {
            var state = data.State;
            var value = data.Value;
            phoneNumber = value.PhoneNumber;
            var IsFirstLogin = value.IsFirstLogin;
            var IsBoundPhoneNumber = value.IsBoundPhoneNumber;
            var IsPortect = value.IsPortect;
            if (state == 1) {
                $('.backstage_usernickname').append('昵&nbsp;&nbsp;&nbsp;称：<span>' + value.NickName + '</span>');
                $('.backstage_userrolename').append('角色名：<span>' + value.RoleName + '</span>');
                $('.backstage_userdiamond').append('红宝石：<span>' + value.RubyCount + '</span>');
                if (IsFirstLogin == 1) {
                    $('.backstage_container').show();
                    turn_square();
                    if (IsPortect == 1) {
                        $('.open_protect').show();
                        $('.off_protect').hide();
                    } else {
                        $('.open_protect').hide();
                        $('.off_protect').show();
                    }
                    if (IsBoundPhoneNumber == 1) {
                        $('.bindphone_button')[0].innerHTML = '已绑定手机';
                        $('.bindphone_button').addClass('unbindPhoneNum');
                        $('.unbindPhoneNum').on('click', function () {
                            $('.backstage_container2 ').show();
                            $('.bindsuccess_phone_num')[0].innerHTML = phoneNumber;
                            $('.backstage_container ').hide();
                        });
                    } else {
                        $('.bindphone_button')[0].innerHTML = '绑定手机';
                        $('.bindphone_button').removeClass('unbindPhoneNum');
                        $('.bindphone_button').on('click', function () {
                            $('.backstage_container1 ').show();
                            $('.backstage_container ').hide();
                        });
                    }UserCtrl();
                } else if (IsFirstLogin == 0){
                         if (IsBoundPhoneNumber == 1) {
                            if (IsPortect == 1) {
                                $('.backstage_container4').show();
                                $('.myPhoneNum')[1].innerHTML = phoneNumber;
                                turn_square();UserCtrl();
                                $('.getCode1').on('click', function () {
                                        $.ajax({
                                            type: 'POST',
                                            url: 'http://' + WebConfig + '/Protect/GetProtectSMS ',
                                            async: false,
                                            dataType: 'json',
                                            data: {"rolename": rolename, "token": token, "phoneNumber": phoneNumber},
                                            success: function (data) {
                                                if (data.State == 1) {
                                                    return true;
                                                } else if (data.State == 2) {
                                                    window.location.href = "file://172.28.8.120/wwwroot2/majiang.lianzhong.com/hmagencyweb/index.html"
                                                }
                                            }
                                        })
                                    });
                                $('.right').on('click',function(){
                                    $.ajax({
                                            type: 'POST',
                                            url: 'http://' + WebConfig + '/Protect/GetProtectSMSVerfiy',
                                            async: false,
                                            dataType: 'json',
                                            data: {"rolename": rolename, "token": token,"captcha ": $('.get_code_num').val()},
                                            success: function (data) {
                                                if (data.State == 1) {
                                                    $('.backstage_container').show();
                                                    $('.backstage_container4').hide();
                                                    $('.off_protect').hide();
                                                    $('.open_protect').show();
                                                    $('.bindphone_button')[0].innerHTML = '已绑定手机';
                                                    $('.bindphone_button').addClass('unbindPhoneNum');
                                                    $('.unbindPhoneNum').on('click', function () {
                                                        $('.backstage_container2 ').show();
                                                        $('.bindsuccess_phone_num')[0].innerHTML = phoneNumber;
                                                        $('.backstage_container ').hide();
                                                    });
                                                } else if (data.State == 2) {
                                                    window.location.href = "file://172.28.8.120/wwwroot2/majiang.lianzhong.com/hmagencyweb/index.html"
                                                } else {
                                                    alert(data.Message);
                                                }
                                            }
                                        })
                                });
                                $('.cancel').on('click',function(){
                                    
                                })
                            }else{
                                $('.backstage_container').show();
                                $('.open_protect').hide();
                                $('.off_protect').show();
                                $('.bindphone_button')[0].innerHTML = '已绑定手机';
                                $('.bindphone_button').addClass('unbindPhoneNum');
                                $('.unbindPhoneNum').on('click', function () {
                                    $('.backstage_container2 ').show();
                                    $('.bindsuccess_phone_num')[0].innerHTML = phoneNumber;
                                    $('.backstage_container ').hide();
                                });turn_square();UserCtrl();
                            }
                         }else{
                                $('.open_protect').hide();
                                $('.off_protect').show();
                                turn_square();
                                $('.backstage_container').show();
                                $('.bindphone_button')[0].innerHTML = '绑定手机';
                                $('.bindphone_button').removeClass('unbindPhoneNum');
                                $('.bindphone_button').on('click', function () {
                                $('.backstage_container1 ').show();
                                $('.backstage_container ').hide();
                                });turn_square();UserCtrl();
                         }
                }
            }
        }
    })
}
Info();
