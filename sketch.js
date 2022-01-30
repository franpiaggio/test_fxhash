// Esto se ejecuta 1 sola vez
let posX, posY, size
const colors = ["#C6D57E", "#D57E7E", "#A2CDCD", "#FFE1AF", "#4B3869", "#63B4B8", "#f4a261","#f4f1de","#e07a5f","#3d405b","#81b29a", "#f2cc8f"]



function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
}

function traducirVelocidad(numero){
    if(numero < 10){
        return "Lento"
    }else if(numero < 40){
        return "Media"
    }else{
        return "Rápido"
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    let velocidad = map(fxrand(), 0, 1, 5, 60)
    window.$fxhashFeatures = {
        "Velocidad": traducirVelocidad(velocidad)
    }
    frameRate(velocidad)
    randomSeed( fxrand() * 9999 )
    background( random(colors) )
    posX = 0
    posY = 0
    size = 50
}
// Esto corre en bucle hacia el infinito
function draw(){
    
    const esLineaDerecha = fxrand() > 0.3
    const sePuedeDibujar = fxrand() > 0.4
    const dibujarCuadrado = fxrand() > 0.99

    if(dibujarCuadrado){
        fill(random(colors))
        rect(posX, posY, size)
    }
    stroke(255)
    let grosor = map(fxrand(), 0, 1, 3, 5)
    strokeWeight(grosor)
    stroke(randomFromList(colors))
    if(sePuedeDibujar){
        if(esLineaDerecha){
            line(posX, posY, posX + size, posY + size)
        }else{
            line(posX + size, posY, posX, posY + size)
        }
    }

    // Calcula la próxima posición
    if(posY < height){
        if(posX < width){
            posX += size
        }else{
            posX = 0
            posY += size
        }
    }else{
        noLoop()
    }
}