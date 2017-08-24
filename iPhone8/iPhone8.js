    var rightBtn=document.getElementById("bannerleft"),//获取左轮节点
        leftBtn=document.getElementById("bannerright"),//获取右轮节点
         boxImage=document.getElementById("bannerbottom"),//获取底层div
         mb=document.getElementById("mengban"),
         oldDate=new Date();//获取时间
    leftBtn.onclick=function(){//
        var newDate=new Date();//获取点击时间
        if(newDate-oldDate>500){//如果连续点击时间超过一秒
            //获取最终样式表
            var boxImageList = boxImage.currentStyle || document.defaultView.getComputedStyle(boxImage,null);
            var mgLeft=parseInt(boxImageList.marginLeft);//将外边距转化为整数
            console.log(mgLeft);
            if(mgLeft==-2000){
                mgLeft=0;//当图片到最后一张时跳到第一张
            }else{
                mgLeft-=500;
            }
            boxImage.style.marginLeft=mgLeft+"px"
            
            oldDate=newDate;
        }
    };
    rightBtn.onclick=function(){
        var newDate=new Date();
        //获取最终样式表
        if(newDate-oldDate>500) {
            var boxImageList = boxImage.currentStyle || document.defaultView.getComputedStyle(boxImage, null);
            var mgLeft = parseInt(boxImageList.marginLeft);
            if (mgLeft == 0) {
                mgLeft = -2000;
            }
            else {
                mgLeft += 500;
            }
            boxImage.style.marginLeft = mgLeft + "px";
            
            oldDate=newDate;
        }
    };
   var timer;
   function play(){
    timer=setInterval(function(){
        rightBtn.onclick();
    },2000);
   }
   function stop(){
    clearInterval(timer);
   }
     boxImage.onmouseover=stop;
     boxImage.onmouseout=play;
     play();
     //击图片出现蒙版
    boxImage.onclick=function(){
        mengban.style.display="block";
        document.documentElement.style.overflowY = 'hidden';//隐藏滚动条
        var close=document.getElementById("close");//点击关闭按钮蒙版消失
        close.onclick=function(){
            mengban.style.display="none";
            document.documentElement.style.overflowY = 'auto';//显示滚动条
        }
    }
   window.onscroll = function () {
        var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
            node = document.getElementById('nav'),
            title1=document.getElementById('title1'),
            title2=document.getElementById('title2'),
            title3=document.getElementById('title3'),
            nav=document.getElementById('navfoot');
        if (top > 44) {//44就是滚动条滚动到的位置，大于44才显示
            node.style.display = 'block';
        } else {
            node.style.display = 'none';
        }
        if(top>2920&&top<3920){

            title5.style.backgroundColor="#dd5044";
        }
        else if(top>2520&&top<2920){
            title4.style.backgroundColor="#dd5044";
        }
        else if(top>1400&&top<2520){
            title3.style.backgroundColor="#dd5044";
        }else if(top>950&&top<1400){
            title2.style.backgroundColor="#dd5044";
        }
        else if(top<950&&top>44){
            title1.style.backgroundColor="#dd5044";
        }
        else{
            nav.style.backgroundColor="#000";
        }
    }


