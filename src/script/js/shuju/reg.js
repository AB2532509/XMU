// (function($){
//     const  $user_txt = $('.inp-txt');
//     const  $user_email = $('.inp-email');
//     const  $user_pwd0 = $('.inp-pwd0');
//     const  $user_pwd1 = $('.inp-pwd1');
//     const  $submit  = $('.inp-but');
//     const  $errortxt = $('#inp .err_username');
//     let $userflag = true;//检测用户名是否重复的标记，用来阻止提交
    
//     $user_txt.on('blur',function(){
//        let $usename = $user_txt.val();
//        let $useema = $user_email.val();
//        let $usepwd0 = $user_pwd0.val();
//        let $usepwd1 = $user_pwd1.val();
//       $.ajax({
//           type:"post",
//           url:"http://127.1.1.0/PHP/projectname/php/xuanran.php",
//           data:{
//             "user_txt":$usename,
//             "user_email":$useema,
//             "user_pwd0":$usepwd0,
//             "user_pwd1":$usepwd1
//         },

//         dataType: 'json',
        
//         success: function (respond) {
//             if (!respond){
//                 $errortxt.html('√');
//                 $errortxt.css({
//                     "color":"blue",
//                      "font-size":"14px",
//                      "font-weight": "900"
//                  } );
//                     console.log( $errortxt.css),
//                 $userflag = true;
//             } else {
//                 $errortxt.html('用户名已存');
//                 $errortxt.css({ "color": "red", "font-weight": "900", "font-size": "14px" });
//                 $userflag = false;
//             }
//         }
//       })

//     });

//     $submit .on('click', function () {
//         if (!$userflag) {
//             return false;
//         }
//     });
    
// })(jQuery)



// (function($){
//     let  $user_txt = $('.inp-txt');
//     let  $user_email = $('.inp-email');
//     let  $user_pwd0 = $('.inp-pwd0');
//     let  $user_pwd1 = $('.inp-pwd1');
//     let  $submit  = $('.inp-but');

//     let  $error_txt = $('.err_username');
//     let  $error_email = $('.err_email');
//     let  $error_pwd0 = $('. err_pwd0');
//     let  $error_pwd1 = $('.err_pwd1');
 

//     $user_txt.on('blur', function () {
//         if (!(/^1[3456789]\d{9}$/.test($user_txt.val()))) {
//             $error_txt.html('用户名格式错误，请重新填写');
//             $error_txt.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
//             console.log( $error_txt.css)
//             return false;
//         }

//     });

//     $user_email.on('blur',function(){
//         if(!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test($user_email.val()))){
//             $error_email.html('邮箱格式错误，请重新填写');
//             $error_email.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });  
//             return false;
//         }
//     });

    


// })(jQuery)


(function($){
    let  $user_txt = $('.inp-txt');
    let  $user_email = $('.inp-email');
    let  $user_pwd0 = $('.inp-pwd0');
    let  $user_pwd1 = $('.inp-pwd1');
    const  $submit  = $('.inp-but');

    let  $errortxt = $('#inp .err_username');
    let $erroremail = $('#inp .err_email')
    let $errormm = $('#inp .err_pwd0')

    var yhm = true; //检测用户名是否重复的标记，用来阻止提交
    var yx = true;
    var mm = true;


    $user_txt.on('blur', function() {
        $errortxt.html('');

        if (!(/^[a-zA-Z0-9_-]{4,16}$/.test($user_txt.val()))) {
            $errortxt.html('用户名格式错误，4到16位 字母，数字');
            $errortxt.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
            yhm = false;
        }
    });

    // 邮箱
    $user_email.on('blur', function() {  

       $erroremail.html('');

        if (!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test($user_email.val()))) {
            $erroremail.html('邮箱格式错误，请重新填写');
            $erroremail.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
            yx = false;
        }else{
            $erroremail.html('输入正确');
            $erroremail.css({ "color": "rgb(111, 114, 250)", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
        }

    });
    // 密码
    $user_pwd0.on('blur', function() {
       $errormm.html('');
        if (!(/^[a-zA-Z1-9]\w{6,18}$/.test($user_pwd0.val()))) {

           $errormm.html('密码格式错误，以字母开头，长度在6~18之间，只能包含字母、数字和下划线');

           $errormm.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
            mm = false;
        }else{
            $errormm.html('输入正确');
            $errormm.css({ "color": "rgb(111, 114, 250)", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
        }

        }); 
        $submit .on('submit', function() {
            if (!yhm || !yx || !mm || !$userflag) { //标记变成false时，阻止跳转。
                // alert('错误')
                return false; //阻止跳转
            }


    });

})(jQuery);



(function($){
    const  $user_txt = $('.inp-txt');
    const  $user_email = $('.inp-email');
    const  $user_pwd0 = $('.inp-pwd0');
    const  $user_pwd1 = $('.inp-pwd1');
    const  $submit  = $('.inp-but');
    const  $errortxt = $('#inp .err_username');
    const $erroremail = $('#inp .err_email')
    const $errormm = $('#inp .err_pwd0')

    
    let $userflag = true;//检测用户名是否重复的标记，用来阻止提交
    var yhm = true; //检测用户名是否重复的标记，用来阻止提交
    var yx = true;
    var mm = true;


    $user_txt.on('blur',function(){
       let $usename = $user_txt.val();
       let $useema = $user_email.val();
       let $usepwd0 = $user_pwd0.val();
       let $usepwd1 = $user_pwd1.val();
       
      $.ajax({
          type:"post",
          url:"http://127.1.1.0/PHP/projectname/php/xuanran.php",
          data:{
            "user_txt":$usename,
            "user_email":$useema,
            "user_pwd0":$usepwd0,
            "user_pwd1":$usepwd1
        },

        dataType: 'json',
        
        success: function (respond) {
            $errortxt.html('');
            if (!respond){
                $errortxt.html('√');
                $errortxt.css({
                    "color":"blue",
                     "font-size":"14px",
                     "font-weight": "900"
                 } );
                 
                $userflag = true;
            } else {
                $errortxt.html('用户名已存');
                $errortxt.css({ "color": "red", "font-weight": "900", "font-size": "14px" });
                $userflag = false;
            }
        }
      });

    });


   $submit.on('submit', function() {

        if ($user_txt.val() === '') {

            $errortxt.html('用户名格式错误，4到16位 字母，数字');
            $errortxt.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
            yhm = false;

        }

        if ($user_email.val() === '') {
            $erroremail.html('邮箱格式错误，请重新填写');
            // alert(666);
            $erroremail.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
            yx = false;

        }
      

        if ($user_pwd0.val() === '') {
            $errormm.html('密码格式错误，以字母开头，长度在6~18之间，只能包含字母、数字和下划线');
            $errormm.css({ "color": "red", "font-weight": "900", "line-height": "2em", "vertical-align": "middle" });
            mm = false;

        }

        if (!yhm || !yx || !mm || !$userflag) { //标记变成false时，阻止跳转。
            // alert('错误')
            return false; //阻止跳转
        }
    });
    
})(jQuery);


