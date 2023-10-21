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
            top: this.gameSize.h - 100,
        }
        this.playerVel = {
            left: 8,
            top: 5,
            gravity: 0.4
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
    }
    moveLeft() {
        if (this.playerPos.left > 20) {
            this.playerPos.left -= this.playerVel.left
            this.updatePosition()
        }

    }
    moveRight() {
        if (this.playerPos.left <= this.gameSize.w / 2) {
            this.playerPos.left += this.playerVel.left
            this.updatePosition()
        }

    }
    jump() {
        this.playerPos.top -= this.playerVel.top
        this.updatePosition()
        //      if (this.playerPos.top <= this.gameSize.h - 100) {}





    }

    gravity() {

        this.playerPos.top += this.playerVel.top
        this.playerVel.top += this.playerVel.gravity
        this.updatePosition()
    }



    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px `
    }
}