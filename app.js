const CPU_Choice = document.getElementById("cpu choice")
const P_Choice = document.getElementById("player choice")
const Result = document.getElementById("result")
const Choices=document.querySelectorAll('button')
Choices.forEach(choice => choice.addEventListener("click", (e) => {
    P_Choice.innerHTML=e.target.id
    generateCPUChoice()
    getResult()
}))

function generateCPUChoice() {
    const randomNumber=Math.floor(Math.random()*Choices.length)
    console.log(randomNumber)
    if(randomNumber==0){
        CPU_Choice.innerHTML='Rock'
    }
    if(randomNumber==1){
        CPU_Choice.innerHTML='Paper'
    }
    if(randomNumber==2){
        CPU_Choice.innerHTML='Scissors'
    }
}

function getResult(){
    if(CPU_Choice.innerHTML===P_Choice.innerHTML){
        Result.innerHTML='It\'s a draw'
    }
    if(CPU_Choice.innerHTML === "Rock" && P_Choice.innerHTML==='Paper'){
        Result.innerHTML='Player Wins'
    }
    if(CPU_Choice.innerHTML === 'Rock' && P_Choice.innerHTML==='Scissors'){
        Result.innerHTML='CPU Wins'
    }
    if(CPU_Choice.innerHTML === 'Scissors'&&P_Choice.innerHTML==='Paper'){
        Result.innerHTML='CPU Wins'
    }
    if(CPU_Choice.innerHTML === 'Scissors'&&P_Choice.innerHTML==='Rock'){
        Result.innerHTML='Player Wins'
    }
    if(CPU_Choice.innerHTML === 'Paper'&&P_Choice.innerHTML==='Rock'){
        Result.innerHTML='CPU Wins'
    }
    if(CPU_Choice.innerHTML === 'Paper'&&P_Choice.innerHTML==='Scissors'){
        Result.innerHTML='Player Wins'
    }
}