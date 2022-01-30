// Esto se ejecuta 1 sola vez
let posX, posY, size
function setup(){
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    background("#0082C8")
    posX = 0
    posY = 0
    size = 50
}
// Esto corre en bucle hacia el infinito
function draw(){
    
    const esLineaDerecha = fxrand() > 0.5
    const sePuedeDibujar = fxrand() > 0.15

    stroke(255)
    strokeWeight(2)
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