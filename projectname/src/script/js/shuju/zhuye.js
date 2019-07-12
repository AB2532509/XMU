; !function () {
    //渲染商品结构 
    const goodslist = document.querySelector('.only-we-have');
    let box=$('.only-we-have .prod-box')
    let htmlstr=''
    ajax({
        url: 'http://127.1.1.0/PHP/projectname/php/inde.php',
        dataType: 'json',
        success: function (sid) {
            console.log(sid)
            for (let i = 0; i < sid.length; i++) {
                htmlstr += `<div class="item">
                <a href="details.html?sid=${sid[i].sid}" title="${sid[i].jieshaoa}" target="_blank">
                <div class="i-size-box">
                <img class="img-agent lazyload" id="lunbo_1" alt="${sid[i].chanpin}" data-original="${sid[i].imgs}" src="${sid[i].imgs}">
                </div>
                <p class="i-size-tit is-tags-mark"><u class="jsd-tag"></u>${sid[i].chanpin}</p>
                <span data-pmid="77607472" data-productid=""><em>¥</em>${sid[i].jiage}</span>
                <div class="marking label"><img src="${sid[i].tubiao}"></div>
                </a>
                <div class="outline">
                <p class="item-info">${sid[i].jieshaoa}</p>
                <p class="item-info">${sid[i].jieshaob}</p>
                </div>
                </div>
                `;
            }
                // console.log(htmlstr)
                box.html(htmlstr)
            
            // goodslist.innerHTML = htmlstr;
        }
    });
    // $('.only-we-have .prod-box')= htmlstr;
          
            //图片懒加载
            $(function () {//和拼接的元素放在一起。
                $("img.lazy").lazyload({
                    effect: "fadeIn"//图片显示方式
                });
            });
}();

