class Player {
    constructor(gameSize, gameScreen, keys) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.keys = keys

        this.playerSize = {
            w: 60,
            h: 60,
        }
        this.playerPos = {
            left: 30,
            top: this.gameSize.h - this.playerSize.h - 50,
            base: this.gameSize.h - this.playerSize.h - 50
        }
        this.playerVel = {
            left: 10,
            top: 150,
            gravity: .5,
            maxVel: 150 + this.playerSize.h
        }

        this.init()
    }

    init() {


        this.playerElement = document.createElement("div")
        this.playerElement.style.backgroundColor = "black"
        this.playerElement.style.position = "absolute"
        this.playerElement.style.width = `${this.playerSize.w}px`
        this.playerElement.style.height = `${this.playerSize.h}px`
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px`

        this.gameScreen.appendChild(this.playerElement)
        //this.playerElement.classList.add("player")
    }
    moveLeft() {
        if (this.playerPos.left > 20) {
            this.playerPos.left -= this.playerVel.left
            this.updatePosition()
        }

    }
    moveRight() {
        if (this.playerPos.left <= this.gameSize.w - this.playerSize.w - 30) {
            this.playerPos.left += this.playerVel.left
            this.updatePosition()
        }

    }
    //si el bicho esta en la base, 
    jump() {
        if (this.onBase()) {
            this.playerPos.top -= this.playerVel.top //da un salto 
            this.playerVel.top = 1 //velocidad de salto = 1
            this.updatePosition()
        }
    }
    onBase() {
        return this.playerPos.top >= this.playerPos.base
    }


    move(keys) {
        if (!this.onBase()) {
            console.log("mi base es", this.playerPos.base)
            //console.log("Vel actual es:", this.playerVel.top) //mientras está cayendo recupera velocidad
            this.playerVel.top += this.playerVel.gravity;
            this.playerPos.top += this.playerVel.top

        } else if (this.playerVel.top < this.playerVel.maxVel) {  //si llega a la base recupera su fuerza de salto
            this.playerVel.top = this.playerVel.maxVel
        }

        keys.RIGHT.pressed && this.moveRight()
        keys.LEFT.pressed && this.moveLeft()

        this.updatePosition()

    }

    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px `
    }
}
