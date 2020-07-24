//获取

let loginBtn = document.querySelector('.login-btn')  //登录

let loginBox = document.querySelector('#loginbox')  //模态框

function setLoginBox(){
    loginBox.style.width =  document.documentElement.clientWidth + 'px'   //获取到的只是数字，记得添加单位px
    loginBox.style.height = document.documentElement.clientHeight + 'px'
}

//注册事件

//登录按钮
loginBtn.addEventListener('click',function(){

    setLoginBox()
    loginBox.style.display = 'block'

})

//窗口
window.addEventListener('resize',function(){

    setLoginBox()

})


//获取
let delUser = document.querySelector('.del-user')
let user = document.querySelector('.user')
let delBtn = document.querySelector('.del-btn')
let loginCont = document.querySelector('.login-cont')
let pwd = document.querySelector('.pwd')
let changePwd = document.querySelector('.change-pwd')

let userMsg = document.querySelector('.userMsg')
let pwdMsg = document.querySelector('.pwdMsg')

let myform = document.querySelector('form')


//定义标杆
let flag = true

//定义登录标杆
let btnflag = {
    userFlag: true,
    pwdFlag: true
}


//用户名 键入 事件
user.addEventListener('input',function(){
    if(user.value.length > 0){
        delUser.style.display = 'block'
    }else{
        delUser.style.display = 'none'
    }

    
})

//失去焦点 验证用户名
user.addEventListener('blur',function(){
    //获取值
    let userVal = user.value

    //定义规则
    let userReg = /^[A-z0-9_]{6,12}$/

    let uRsult = userReg.test(userVal)

    if(!uRsult){
        user.style.border = '1px solid red'
        userMsg.display = 'block'
        userMsg.innerHTML = '请输入正确的用户名！'
        btnflag.userFlag = false
    }else{
        user.style.border = '1px solid #ccc'
        userMsg.display = 'none'
        userMsg.innerHTML = ''
        btnflag.userFlag = true
    }
})

//失去焦点 验证密码
pwd.addEventListener('blur',function(){
    //获取值
    let pwdVal = pwd.value

    //定义规则
    let pwdReg = /^[A-z0-9_]{8,16}$/

    let pRsult = pwdReg.test(pwdVal)

    if(!pRsult){
        pwd.style.border = '1px solid red'
        pwdMsg.display = 'block'
        pwdMsg.innerHTML = '请输入正确的密码！'
        btnflag.pwdFlag = false
    }else{
        pwd.style.border = '1px solid #ccc'
        pwdMsg.display = 'none'
        pwdMsg.innerHTML = ''
        btnflag.pwdFlag = true
    }
})


//用户名 删除icon 事件 
delUser.addEventListener('click',function(){
    user.value = ''
    this.style.display = 'none'
})


//密码 键入
pwd.addEventListener('input',function(){
    if(pwd.value.length > 0){
        changePwd.style.display = 'block'
    }else{
        changePwd.style.display = 'none'
    }

    
})

//眼睛 icon 点击事件
changePwd.addEventListener('click',function(){
    if(flag){

        changePwd.src = './images/open.png'
        pwd.type = 'text'

    }else{

        changePwd.src = './images/close.png'
        pwd.type = 'password'

    }
    flag = !flag
})

//登录 事件

myform.addEventListener('submit',function(event){

    if(!btnflag.userFlag){

        user.style.border = '1px solid red'
        userMsg.display = 'block'
        userMsg.innerHTML = '请输入正确的用户名！'
        event.preventDefault()

    }else if(!btnflag.pwdFlag){
        pwd.style.border = '1px solid red'
        pwdMsg.display = 'block'
        pwdMsg.innerHTML = '请输入正确的密码！'
        event.preventDefault()
    }
    
    
})


//关闭 登录框 事件
delBtn.addEventListener('click',function(){
    //loginCont.style.display = 'none'
    loginBox.style.display = 'none'
})



