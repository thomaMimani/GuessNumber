let secretNumber= Math.trunc (Math.random()*20)+1

let score = 20
let highScore = 0
let message = document.querySelector('.message')
let guess = document.querySelector('.guess')

let scoreEl = document.querySelector(`.score`)
let highScoreEl = document.querySelector(`.highscore`)



function checkBtn(){

    if(!guess.value){
        message.textContent =`No Number`

    }else if(guess.value == secretNumber){
        highScore = score>highScore?score:highScore
        highScoreEl.textContent=highScore
        message.textContent=`Correct Number`
        document.body.style.backgroundColor=`green`
        document.querySelector(`.number`).textContent=secretNumber


    }else if(guess.value!==secretNumber){
        if(score>1){
            message.textContent=guess.value>secretNumber?'Too High':`Too Low`
            score--
            scoreEl.textContent=score
        }else{
            scoreEl.textContent=0
            message.textContent=`Game Over`
            document.body.style.backgroundColor='red'

        }

    }
    
}


function again(){
    score = 20
    scoreEl.textContent=20
    secretNumber = Math.trunc (Math.random()*20)+1
    console.log(secretNumber)
    document.body.style.backgroundColor=`black`
    message.textContent=`Start guessing...`
    guess.value=''
    document.querySelector(`.number`).textContent=`?`
}