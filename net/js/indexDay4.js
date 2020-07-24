//获取元素
let pic = document.querySelector('#banner #pic')
let picLi = document.querySelectorAll('#banner #pic li')



//console.log(picLi);

//克隆元素
pic.appendChild( picLi[0].cloneNode(true) )

//pic设置宽度
pic.style.width = picLi[0].offsetWidth * (picLi.length + 1) + 'px'  //忘记加px了  获取元素宽度 offsetWidth

//设置索引
let index = 0

//开启计时
setInterval(function(){

    index++

    startMove(pic,{left:-index * picLi[0].offsetWidth},2500,'easeBoth',function(){

        if(index == picLi.length){
            index = 0
            pic.style.left = 0
        }
    })

},3000)