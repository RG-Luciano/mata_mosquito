var height = 0
var width = 0
var lives = 1
var time = 15

var createMosquitoTime = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'easy'){
    createMosquitoTime = 1500
}else if(nivel === 'normal'){
    createMosquitoTime = 1000
}else if( nivel === 'hard'){
    createMosquitoTime = 750
}

function ajustArea(){
    height = window.innerHeight
    width = window.innerWidth
}
ajustArea()

var cronometer = setInterval (function(){

    time -= 1
    if(time < 0){
        clearInterval(cronometer)
        clearInterval(crateMosquito)
        window.location.href = './winner.html'
    }else{
        document.getElementById('cronometer').innerHTML = time
    }
},1000)
function randomPosition(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(lives > 3){
           window.location.href = './game_over.html'
        }else{
        document.getElementById('v' + lives ).src ='../assets/img/coracao_vazio.png'
        }
        lives ++
    }

    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 :positionX
    positionY = positionY < 0 ? 0 :positionY

    console.log(positionX, positionY)

    var mosquito = document.createElement('img')
    mosquito.src = '../assets/img/mosquito.png'
    mosquito.className = randomSize() +  ' ' + randomSide()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito' 
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)
}
function randomSize(){
    var classe = Math.floor(Math.random() * 3)

    if (classe == 0){
        return 'mosquito1'

    }else if(classe == 1){
        return 'mosquito2'
        
    }else{
        return 'mosquito3'
    }

}
function randomSide() {
    var classe = Math.floor(Math.random() * 2)

    if (classe == 0){
        return 'sideA'
    }else {
        return 'sideB'
    }
}

