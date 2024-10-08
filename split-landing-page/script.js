const leftside = document.querySelector('.left')
const rightside = document.querySelector('.right')
const continer = document.querySelector('.container')

leftside.addEventListener('mouseenter', ()=>{
    continer.classList.add('hover-left')
})
leftside.addEventListener('mouseleave', ()=>{
    continer.classList.remove('hover-left')
})

rightside.addEventListener('mouseenter', ()=>{
    continer.classList.add('hover-right')
})
rightside.addEventListener('mouseleave', ()=>{
    continer.classList.remove('hover-right')
})