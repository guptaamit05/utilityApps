const progress = document.getElementById('progress')
const next = document.getElementById('next')
const pre = document.getElementById('previous')
const circles = document.querySelectorAll('.circle')
let countCircle = 1;

next.addEventListener('click', function(){
    countCircle++;
    if(countCircle > circles.length){
        countCircle = circles.length
    }
    updateActive()
})
pre.addEventListener("click", function(){
    countCircle--;
    if(countCircle < 1){
        countCircle = 0;
    }
    updateActive()
})

function updateActive(){
    circles.forEach((item, idx)=>{
        if(idx<countCircle){
            item.classList.add('active')
        }else{
            item.classList.remove('active')
        }
    })
 

    let active = document.querySelectorAll('.active')
    console.log(('active = '+ active.length))
    console.log(('circle = '+circles.length))
    console.log(countCircle)
    progress.style.width = ((active.length-1)/(circles.length-1))* 100 + '%'

    if(countCircle == 1){
        pre.disabled = true;
    }else if(countCircle == circles.length){
        next.disabled = true
    }else{
        pre.disabled = false
        next.disabled = false
    }
        
}
