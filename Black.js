let cards=[]
let sum=0
let hasBlackjack=false
let isAlive=false
let message=""
let msg=document.getElementById("msg")
let summ=document.getElementById("sum")
let cardd=document.getElementById("cards")
let playerr=document.getElementById("player")
let player={
    name:"Sumit",
    coins:1000
}
playerr.textContent=player.name+" : $"+player.coins

function startGame(){
    isAlive=true
    let card1=getRandomCard()
    let card2=getRandomCard()
    cards=[card1,card2]
    sum=card1+card2
    

    renderGame()
}

function getRandomCard(){
    let random=Math.floor(Math.random()*13)+1
    if(random===1){
        return 11
    }
    else if(random>10){
        return 10
    }
    else{
        return random
    }
}

function renderGame(){
    cardd.textContent="Cards : "
    for(let i=0; i<cards.length; i++){
        cardd.textContent+=cards[i]+" "
    }

    summ.textContent="Sum : "+sum

    if(sum<21){
    message="Do you want to draw a new card"
    }
    else if(sum===21){
    message="Hurray!!! You got a Blackjack"
    hasBlackjack=true
    playerr.textContent=player.name+" : $"+coins()
    }
    else{
    message="Oops!!! You are out of the game"
    isAlive=false
    playerr.textContent=player.name+" : $"+coins()
    }
    msg.textContent=message
}

function newCard(){
    if(isAlive===true && hasBlackjack===false){
        let newCard=getRandomCard()
        cards.push(newCard)
        sum+=newCard
        renderGame()
    }
}
function coins(){
    if(hasBlackjack){
        return player.coins+=100
    }
    else if(isAlive===false){
        return player.coins-=50
    }
    else{}
}
