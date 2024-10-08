let btn = document.querySelector('.btn');
let container = document.querySelector(".container");

const messageType = ['info', 'success', 'danger'];
const messageArray = ["Hi info Notification", "Hi it's Success!", "Hi, it's danger Notification!"]

const randomMessageIndex = () =>{
    return messageArray[Math.floor(Math.random()* messageArray.length)];
}

const randomMessageType = () =>{
    return messageType[Math.floor(Math.random()* messageType.length)];
}

const showHideToast = (message=null, typeC=null)=>{

    const div = document.createElement('div');
    div.classList.add("toast")
    div.classList.add(typeC ? typeC : "info")
    div.classList.add('show')   
    div.innerText = message ? message : randomMessageIndex()
    container.appendChild(div)
    setTimeout(() => {
        div.classList.remove('show')
        div.remove();
    }, 1000);
}
btn.addEventListener("click", ()=>{showHideToast(randomMessageIndex(),randomMessageType())});

