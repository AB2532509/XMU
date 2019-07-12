// (function ($) {

//     let $user_name = $('.yhm');
//     let $user_pwd = $('.mm');
//     let $errname = $('.username_input');
//     let $errpass = $('.password_input');
//     const $submit = $('.login-formo');
//     var yhm = true;
//     var mm = true;

//     $user_name.on('blur',function () {
//         if (!(/^[a-zA-Z0-9_-]{4,16}$/.test($user_name.val()))) {
//             $errname.html('用户名格式错误，4到16位 字母，数字');
//             $errname.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
//             yhm = false;
//         }
//     });

//     $user_pwd.on('blur', function () {

//         if (!(/^[a-zA-Z]\w{5,17}$/.test($user_pwd.val()))) {

//             $errpass.html('密码格式错误，以字母开头，长度在6~18之间，只能包含字母、数字和下划线');
//             $errpass.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
//             mm = false;
//         }
//     });

//     $submit.on('submit', function () {
//         if (!yhm || !mm || !$userflag) { //标记变成false时，阻止跳转。
//             // alert('错误')
//             return false; //阻止跳转
//         }
//     });

// })(jQuery);


// (function ($) {

//     let $user_name = $('.yhm');
//     let $user_pwd = $('.mm');
//     let $errname = $('.username_input');
//     let $errpass = $('.password_input');
//     const $submit = $('.login-formo');
//     var yhm = true;
//     var mm = true;

//     $submit.on('click', function() {
//         let $uval = $user_name.val();
//         let $pval = $user_pwd.val();
//         $.ajax({
//             type: "post",
//             url: "http://127.1.1.0/PHP/projectname/php/longin.php",
//             data: {
//                 "user_name": $uval,
//                 "user_pwd": $pval
//             },
//             dataType: 'json',
//         });

//     });

//     $submit.on('submit', function() {

//         if ($user_name.val() === '') {
//             $errname.html('用户名格式错误，4到16位 字母，数字');
//             $errname.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
//             yhm = false;

//         }
//         if ($user_pwd.val() === '') {
//             $errpass.html('密码格式错误，以字母开头，长度在6~18之间，只能包含字母、数字和下划线');
//             $errpass.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
//             mm = false;

//         }

//         if (!yhm || !mm || !$userflag) { //标记变成false时，阻止跳转。
//             // alert('错误')
//             return false; //阻止跳转
//         }
//     });
// })(jQuery);



(function ($) {
    const $username = $('.username');
    const $password = $('.password');
    const $submit = $('.login-button');
    $submit.on('click', function () {
        let $uval = $username.val();
        let $pval = $password.val();
        $.ajax({
            type: "post",
            url: "http://127.1.1.0/PHP/projectname/php/longin.php",
            data: {
                "username": $uval,
                "password": $pval
            },
            dataType: 'json',
            success: function (response) {
                if (!response) {
                    alert('用户名或密码错误')
                } else {
                    location.href = "inde.html";
                }
            }
        });
    })
})(jQuery);


(function ($) {
    let $username = $('.username');
    let $password = $('.password');
    let $errname = $('.username_input');
    let $errpass = $('.password_input');
    $username.on('blur', function () {
        if (!(/^[a-zA-Z0-9_-]{4,16}$/.test($username.val()))) {
            $errname.html('用户名格式错误，请重新填写');
            $errname.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
            return false;
        }
    });
    $password.on('blur', function () {
        if (!(/^[a-zA-Z1-9]\w{6,18}$/.test($password.val()))){
            $errpass.html('密码格式错误，请重新填写');
            $errpass.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
            return false;
        }
    });

})(jQuery);


// ! function () {
//     //验证用户名并登入
//     let nam = /^\w{4,20}$/;
//     let email = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

//     $('#login-btn').on('click', function () {
//         if (email.test($('#account1').val())) {
//             $.ajax({
//                 type: "POST",
//                 url: "http://10.31.158.25/1905/YOho_lipengpeng/php/log.php",
//                 data: {
//                     email: $('#account1').val(),
//                     pwd: $('#password').val()
//                 },
//                 dataType: "JSON",
//             }).done(function(d){
//                 if(d.name){
//                     $.cookie('username', d.name, { expires: 7 })
//                     location.href='http://10.31.158.25/1905/YOho_lipengpeng/src/inde.html'
//                 }
//             })
//         }
//         if (nam.test($('#account1').val())) {
//             $.ajax({
//                 type: "POST",
//                 url: "http://10.31.158.25/1905/YOho_lipengpeng/php/log.php",
//                 data: {
//                     name: $('#account1').val(),
//                     pwd: $('#password').val()
//                 },
//                 dataType: "JSON",
//             }).done(function(d){
//                if(d.name){
//                    $.cookie('username', d.name, { expires: 7 })
//                    location.href='http://10.31.158.25/1905/YOho_lipengpeng/src/inde.html'
//                }
//             })
//         }
//     })
// }()