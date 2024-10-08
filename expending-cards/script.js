const panels1 = document.querySelectorAll('.panel')
const panels = document.querySelectorAll('.panel')

panels1.forEach((eachPanel) =>{

    eachPanel.addEventListener("click", function(){
        removeActiveClass(panels)
        eachPanel.classList.add('active')
    })
})

function removeActiveClass(){
    panels.forEach((eachPanel) =>{
        eachPanel.classList.remove('active')
    })
}

// ---------------- for index2.html.........
const subdivs = document.querySelectorAll('.subdiv')
subdivs.forEach((mainDiv)=>{
    mainDiv.addEventListener("click", function(){       
       mainDiv.nextElementSibling.classList.toggle('active')
       mainDiv.nextElementSibling.style('display', 'block')
    })  
})
