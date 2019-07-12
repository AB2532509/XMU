;(function($){
    let sd = location.search.substring(1).split('=')[1];
    let htmlstr = ''
    const  $spic = $('.img-agent .lazyload .imgss');//小图
    
    const $bpic =$('#J_prodImg');//大图

    const $titlea =$('.title .is-tags-mark .i-size-tit');//标题
    const $titleb =$('.subtitle .titleb');
    const $price =$('#mainprice');//和价格
   

    console.log(sd)
    ajax({
        type:"get",
        url:'http://127.1.1.0/PHP/projectname/php/details.php',
        data:{
            picid:sd
        },
        dataType:'json',
        success:function(objdata){
            
            console.log($('.img-agent'))
           $('.img-agent').attr('src',objdata.imgs)
           $titlea.html(objdata.titlea);
           $titleb.html(objdata.titleb);
        }
    })
    
})(jQuery);


// (function ($) {
//     //获取商品列表传来的id

//     let sid = location.search.substring(1).split('=')[1];
//     let htmlstr = '';
//     // console.log(sid);
//     const $spic = $('.spic');//小图
//     const $bpic = $('.bf');//大图
//     const $sf = $('.sf');
//     const $title = $('.primary-info h1');//商品主标题
//     const $stitle = $('.promotion-words span');//商品副标题
//     const $price = $('.now-price');//价格
//     const $allprice = $('.totalPrice');//总价

//     $.ajax({
//         type: "get",
//         url: "http://127.0.0.1:8080/wangyi.project/src/php/details.php",
//         data: {
//             picid: sid
//         },
//         dataType: "json",

//         success: function (product) {
//             //1.拼接放大镜图片等信息
//             $('.spic img').attr("src", product.bigpic);
//             $('.bf img').attr("src", product.bigpic);
//             $title.html(product.dtitle);
//             $stitle.html(product.dstitle);
//             $price.html('¥' + product.newprice);
//             $allprice.html('¥' + product.newprice);
//             //拼接小图列表。
//             let $ullist = product.piclist.split(',');
            // // $('.clear li img').attr("src", $ullist[i]);
            // $.each($ullist, function (i, e) {
            //     // console.log($ullist[i]);
            //     $('.clear li img').eq(i).attr("src", $ullist[i]);
            // });

//         }
//     });


//     //tab切换
    

// })(jQuery);