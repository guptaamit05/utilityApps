let generate = document.querySelector('.btn-password')
let btnInput = document.querySelector('.btn-input')
let upper = document.querySelector('.upper')
let lower = document.querySelector('.lower')
let numberC = document.querySelector('.number')
let symbols = document.querySelector('.symbols')
let faCopy = document.querySelector('.fa-copy')
let allChecked = document.querySelectorAll('.pwd-cls')


faCopy.addEventListener('click', () => {

    let copyPassword = document.querySelector('.btn-input').value;
    if(copyPassword){
        navigator.clipboard.writeText(copyPassword)
        alert("Copied: " + copyPassword)
    }
})

const get_lower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
const get_upper =() =>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
const get_number = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
const get_synbols = ()=> {
    let p = "!@#$%^&*()_+:;'<>?/'";
    return p[Math.floor(Math.random() * p.length)]
}

const giveIncludePatter = (upper, lower, numberC,  symbols, pwdLength) => {
    let pawrd = "";
    let noOfChecked = upper + lower + numberC + symbols;
    if (noOfChecked) {
        for (let i = 0; i < pwdLength; i++) {
            
            if(lower){
                pawrd += get_lower();
            }
            if(upper){
                pawrd += get_upper();
            }
            if(numberC){
                pawrd += get_number();
            }
            if(symbols){
                pawrd += get_synbols();
            }
        }
    }
    return pawrd.slice(0, pwdLength)
    // return finalpwd.split("").sort(()=>  Math.random() - 0.5).join('');
}


generate.addEventListener('click', () => {
    let pwdLength = document.querySelector('.num').value
    // Password must be between 5 to 120 chars.
    if (pwdLength >= 5 && pwdLength < 120) {
        let radomPwd = giveIncludePatter(upper.checked, lower.checked, numberC.checked, symbols.checked, pwdLength);
        if (radomPwd) {
            btnInput.value = radomPwd;
        }
    }
})


let textEl = document.querySelector('.textEl');
let txt = window.env.STATIC_TXT;
let idx = 1;
writeTextx();

function writeTextx() {
    textEl.innerText = txt.slice(0, idx)
    idx++;
    if (idx > txt.length) {
        idx = 1;
    }
    setTimeout(writeTextx, 100)
}

