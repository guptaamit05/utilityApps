
let allTask = document.querySelector(".alltask")
let tas = document.querySelector('.task');
function appendTexxt(evnt){

    if(evnt.keyCode ==13 && (tas.value.trim() !== "")){
        let pTag = document.createElement('p');
       
        pTag.classList.add('todel')
        pTag.addEventListener("click", () =>{pTag.remove()})
        pTag.innerHTML = tas.value;
        allTask.appendChild(pTag);
        document.querySelector('.task').value = "";
    }
}
