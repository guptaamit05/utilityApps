let icons = document.querySelectorAll('.icons')
let feedbackOutcome = document.querySelector(".feedbackOutcome")
let mainDiv = document.querySelector(".container")
let box1 = document.querySelector(".box-1")
let btn = document.querySelector('.btn')
let feeback = "";

mainDiv.addEventListener('click', (e)=>{

    if(e.target.parentNode.classList.contains('smily')){
        removePreviousSelected()
        e.target.classList.add('selectedItem');
        feeback = e.target.innerHTML;
        btn.removeAttribute('disabled')
        btn.style.cursor  = 'pointer'
    }
    if(e.target.classList.contains('btn')){
        box1.classList.add('hide')
        feedbackOutcome.classList.toggle('hide')
        document.querySelector(".feedback-result").innerHTML = feeback

    }
})

function removePreviousSelected(){
    icons.forEach((remv)=>{
        remv.classList.remove('selectedItem')
    })
}

