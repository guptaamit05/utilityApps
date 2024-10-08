const childs = document.querySelector('#childs')
const textareas =  document.querySelector('#textarea')

textareas.focus()
textareas.addEventListener('keyup', (e)=>{
    createTag(e.target.value)
})

function createTag(inp){
    let tags = inp.split(',').filter((item)=> item.trim() !== '').map((tag)=> tag.trim())
    childs.innerHTML = '';
    tags.forEach((tag)=>{
        let spn = document.createElement('span')
        spn.classList.add('btn')
        spn.innerText = tag 
        childs.appendChild(spn)
    })
}