
//获取
let optTab = document.querySelectorAll('#news .optTab')  //tab标题
let opt = document.querySelectorAll('#news .opt')  //选项内容

console.log(opt);

let x = 0

//遍历
for(let i=0; i<optTab.length; i++){
    optTab[i].addEventListener('mouseover',function(){

        optTab[x].classList.add('cb85')
        optTab[i].classList.remove('cb85')

        opt[x].classList.remove('active')
        opt[i].classList.add('active')
        x = i

    })
}