const questData = [{
    "question": "A flashing red traffic light signifies that a driver should do what?",
    "A": "stop",
    "B": "speed up",
    "C": "proceed with caution",
    "D": "honk the horn",
    "answer": "A"
}, {
    "question": "A knish is traditionally stuffed with what filling?",
    "A": "potato",
    "B": "creamed corn",
    "C": "lemon custard",
    "D": "raspberry jelly",
    "answer": "A"
}, {
    "question": "A pita is a type of what?",
    "A": "fresh fruit",
    "B": "flat bread",
    "C": "French tart",
    "D": "friend bean dip",
    "answer": "B"
}, {
    "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
    "A": "landscape",
    "B": "caricature",
    "C": "still life",
    "D": "Impressionism",
    "answer": "B"
}];

let noOfQuest = questData.length;
let correctAns = 0;
let question = document.getElementById("question")
let a = document.getElementById("option_a")
let b = document.getElementById("option_b")
let c = document.getElementById("option_c")
let d = document.getElementById("option_d")
let submt = document.querySelector('.submit')
let pTag = document.getElementById('pTag')
let optionsAll = document.querySelectorAll('.optionsAll')
let container = document.querySelector('.container')

let indexValue = 0;
function deselectRadio() {
    optionsAll.forEach((each) => {
        each.checked = false;
    })
}


function returnCorrectAns() {
    let reslt = "";
    optionsAll.forEach((each) => {
        if (each.checked) {
            reslt = each.value
        }
    })
    return reslt;
}


let questionSet = questData[indexValue];

function changeQest() {
    let dataL = questData.length - 1;
    if (indexValue <= dataL) {
        questionSet = questData[indexValue];
        a.innerHTML = questionSet['A']
        b.innerHTML = questionSet['B']
        c.innerHTML = questionSet['C']
        d.innerHTML = questionSet['D']
        question.innerHTML = `Ques: ${indexValue+1} ${questionSet['question']}`
    } else {
        // Show result...
        let percnt = Math.floor((correctAns/noOfQuest)*100);
        let smily = (percnt>70)? '&#128526;' : (percnt>40 && percnt<70) ? '&#128512;'  : '&#128528;';
        console.log(percnt)
        container.innerHTML = `<h5 class="result">${smily} You have answered: ${correctAns} out of ${noOfQuest} questions correctly.</h5> <div class="submitSection"><buttton id="backtohome" onclick="location.reload()">Back to Home</button></div>`
        indexValue = 0;
        correctAns = 0;
    }
}
changeQest();

document.querySelector('#myForm').addEventListener('submit', function (event) {
    event.preventDefault()

    if (!returnCorrectAns()) {
        pTag.innerHTML = "Please select one option."
    } else {
        if (questionSet['answer'] === returnCorrectAns()) {
            correctAns++;
        }
        deselectRadio();
        pTag.innerHTML = "";
        indexValue++;
        changeQest();
    }


});