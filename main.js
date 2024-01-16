let isPlayer1 = false
const login = [['1', '4', '7', '1', '2', '3', '1', '7'],['2', '5', '8', '4', '5', '6', '5', '5'],['3', '6', '9', '7', '8', '9', '9', '3']]
const player1 =[]
const player2 =[]

document.querySelector('.game').style.display = 'none'
document.querySelector('.restart').style.display = 'none'

function start(){
    document.querySelector('.start').style.display = 'none'
    document.querySelector('.game').style.display = 'block'
    document.querySelector('.restart').style.display = 'block'
}
function restart(){
    location.reload();
}

function checkResult(player , name){
    for(let i= 0;i < login[0].length ; i++){
        if (player.includes(login[0][`${i}`])){
            if(player.includes(login[1][`${i}`])){
                if(player.includes(login[2][`${i}`])){
                    // alert('Player 2 won')
                    document.querySelector('.result').textContent = `${name} Won!`
                    document.querySelectorAll('.box').forEach(box => box.addEventListener('click', restart))
                    break
                }
            }
        }
    }
}


function mark(e){
    console.log(e)
    if(!isPlayer1){
        
        if(player1.includes(this.id) || player2.includes(this.id)){
            alert('Player 1, Please Select Empty Box!')
            isPlayer1 = false
        }else{
            this.style.background = document.getElementById('color1').value
            player1.push(this.id)
            isPlayer1 = true
        }
        checkResult(player1, "Player 1")
        
    }else{
        if(player1.includes(this.id) || player2.includes(this.id)){
            alert('Player 2, Please Select Empty Box!')
            isPlayer1 = true
        }else{
            this.style.background = document.getElementById('color2').value
            player2.push(this.id)
            isPlayer1 = false
        }
        checkResult(player2, 'Player 2')
    }
    
}

let make = document.querySelectorAll('.box')
make.forEach(box => box.addEventListener('click', mark))

document.querySelector('.play').addEventListener('click' , start)
document.querySelector('.replay').addEventListener('click' , restart)