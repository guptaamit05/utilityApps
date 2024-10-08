const countClass = document.querySelectorAll('.countClass')


countClass.forEach((eachItm)=>{
    eachItm.innerText = 0;
    const updateCounter = ()=>{

        const target = +eachItm.getAttribute('data-target')
        const c= +eachItm.innerText
        const incment = target/200;
        if(c<target){
            eachItm.innerText =   `${Math.ceil(c+incment)}`
            setTimeout(updateCounter, 2);
        }else{
            eachItm.innerText = target
        }
    }
    updateCounter()
})