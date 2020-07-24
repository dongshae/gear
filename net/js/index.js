
/* 需求：在线客服
1. 鼠标移入a标签，
    1.1. 改变背景图
    1.2. 显示当前a标签下面的span标签

2. 鼠标移出a标签，
    1.1. 改变背景图
    1.2. 隐藏当前a标签下面的span标签 */



// get a标签

let adom = document.querySelectorAll('#online a')

//console.log(adom[2]);


//遍历

for(let i = 0; i < adom.length; i++){

    //注册移入事件

    adom[i].addEventListener('mouseover',function(){
        this.style.backgroundPositionX = '-50px'

        this.querySelector('span').style.display = 'block'
    })
,
    //注册移出事件

    adom[i].addEventListener('mouseout',function(){
        this.style.backgroundPositionX = 0

        this.querySelector('span').style.display = 'none'
    })

}



//注册滚动事件
window.addEventListener('scroll',function(){

    //获取 滚动距离
    let sTop = document.documentElement.scrollTop || document.body.scrollTop

    //判断
    if(sTop >= 800){
        document.querySelector('#online .rTop').style.display = 'block'
    }else{
        document.querySelector('#online .rTop').style.display = 'none'
    }

})



//回到顶部事件

/* 需求： 
        1、点击回到顶部按钮
        2、缓慢让滚动条回到页面顶部

    分析： 
        1、点击按钮, 每隔多少毫秒,改变滚动条的位置
        2、点击按钮, 每隔30毫秒,在原来的基础上(起始值) - 50， 再赋值给当前滚动距离 */

//获取按钮
let rTop = document.querySelector('#online .rTop')

//注册点击事件
/* rTop.addEventListener('click',function(){

    // alert(1234)
    
    //开启计时
    let timeId = setInterval(function(){

        //获取滚动距离
        let sTop = document.documentElement.scrollTop || document.body.scrollTop

        document.documentElement.scrollTop = sTop - 150
        document.body.scrollTop = sTop - 150

        //判断
        if(sTop <= 0){
            //关闭计时
            clearInterval(timeId)
        }

    },30)
}) */

rTop.addEventListener('click',function(){

    //获取 滚动条距离
    let sTop = document.documentElement.scrollTop || document.body.scrollTop

    //设置时间
    let t = 1000;

    //定义速度
    speed = sTop/t

    //开始计时
    let timeId = setInterval(function(){

        //每次计时 都要重新 获取当前 滚动条距离
        let scro = document.documentElement.scrollTop || document.body.scrollTop

        document.documentElement.scrollTop = scro - speed * 30   //当前距离 - 速度 * 时间
        document.body.scrollTop = scro - speed * 30

        //判断  关闭计时器

        if(scro <= 0){
            clearInterval(timeId)
        }

    },30)

})