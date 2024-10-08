

const hideshow = document.querySelectorAll(".hideshow")
const answer = document.querySelectorAll('.answer')
const cross = document.querySelectorAll('.cross')


hideshow.forEach((eacharrow)=>{
    eacharrow.addEventListener('click', (itm, indx)=>{
        eacharrow.parentNode.parentNode.lastElementChild.classList.toggle('answer')
        eacharrow.firstElementChild.classList.toggle('show')
        eacharrow.lastElementChild.classList.toggle('hide')
     })
     if(!eacharrow.lastElementChild.classList.contains('hide')){
        eacharrow.firstElementChild.classList.add('show')
    }else{
        eacharrow.firstElementChild.classList.add('hide')
    }


    
})