const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxex)

checkBoxex()
function checkBoxex(){
    const triggerbottom = window.innerHeight/5*4
    boxes.forEach(element => {
        
        const botTop = element.getBoundingClientRect().top
        if(botTop < triggerbottom){
            element.classList.add('show')
        }else{
            element.classList.remove('show')
        }
    });
}