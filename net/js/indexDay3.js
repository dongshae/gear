let navLi = document.querySelectorAll('#header .nav li')

for(let i=0; i<navLi.length; i++){

    // 移入
    navLi[i].addEventListener('mouseover',function(){
        if(this.querySelector('ul')) this.querySelector('ul').style.display = 'block'
        this.className = 'active'
    })

    // 移出
    navLi[i].addEventListener('mouseout',function(){

        //判断 子级 是否存在 不存在 值位null
        if(this.querySelector('ul')) this.querySelector('ul').style.display = ''
        this.className = ''
    })

}



// 设置倒计时

let time = document.querySelector('#header .time')

function setTime() {
    //获取当前事件
    let nowDate = new Date()

    //设置 时间
    let date = new Date('2020/8/1 00:00:00')

    //时间差
    let dateCha = date - nowDate

    if (dateCha >= 0) {

        //天
        let day = Math.floor(dateCha / 1000 / 60 / 60 / 24)
        if (day < 10) day = `0${day}`

        //时
        let hour = Math.floor(dateCha / 1000 / 60 / 60 % 24)
        if (hour < 10) hour = `0${hour}`

        //分
        let minute = Math.floor(dateCha / 1000 / 60 % 60)
        if (minute < 10) minute = `0${minute}`

        //秒
        let second = Math.floor(dateCha / 1000 % 60)
        if (second < 10) second = `0${second}`


        time.innerHTML = `距离8月1号还有：${day}天${hour}时${minute}分${second}秒`

    }


}

setTime()
setInterval(setTime, 1000)