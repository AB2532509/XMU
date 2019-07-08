;!function(){
    //渲染商品结构 
    const goodslist=document.querySelector('.goodslist');
    ajax({
        url:'',
        dataType:'json',
        success:function(piclist){
             let htmlstr='<ul>';
             for(let i=0;i<piclist.length;i++){
                 htmlstr+=`
                     <li>
                        <a href="details.html?sid=${piclist[i].picid}">
                         <img src="${piclist[i].url}"/>
                         <p>${piclist[i].title}</p>
                         <span>${piclist[i].price}</span>
                        </a> 
                     </li>
                 `;
             }
             htmlstr+='</ul>';
             goodslist.innerHTML=htmlstr;
        }
    });
 }();