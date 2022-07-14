const computer = document.querySelector('#computer')
const player = document.querySelector('#player')
const result = document.querySelector('#result')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const choices = ['rock','paper','scissors']
const computerChoice = ()=>{
   return choices[Math.floor(Math.random()*3)]
}
const winner = (winner)=>{
    return result.innerHTML = `you ${winner}!`
}
const playerRock = (computer)=>{
    if(computer==='paper'){
        winner('lose')
    }
    if(computer==='scissors'){
        winner('win')
    }
    if(computer==='rock'){
        return result.innerHTML='its a draw!'
    }
}
const playerPaper = (computer)=>{
    if(computer==='scissors'){
        winner('lose')
    }
    if(computer==='rock'){
        winner('win')
    }
    if(computer==='paper'){
        return result.innerHTML='its a draw!'
    }
}
const playerScissors = (computer)=>{
    if(computer==='rock'){
        winner('lose')
    }
    if(computer==='paper'){
        winner('win')
    }
    if(computer==='scissors'){
        return result.innerHTML='its a draw!'
    }
}

rock.addEventListener('click',()=>{
    player.innerHTML='rock'
    computer.innerHTML=computerChoice()
    playerRock(computer.innerHTML)
})
paper.addEventListener('click',()=>{
    computer.innerHTML=computerChoice()
    player.innerHTML='paper'
    playerPaper(computer.innerHTML)
})
scissors.addEventListener('click',()=>{
    computer.innerHTML=computerChoice()
    player.innerHTML='scissors'
    playerScissors(computer.innerHTML)
})
