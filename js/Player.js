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
        }
        this.base = this.gameSize.h - this.playerSize.h - 50
        this.playerVel = {
            left: 8,
            top: 0,
            gravity: 1,
            jumpSpeed: 250
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
        this.playerElement.setAttribute("id", "player")
    }
    moveLeft() {
        if (this.playerPos.left > 20) {
            this.playerPos.left -= this.playerVel.left
            this.updatePosition()
        }
    }
    moveRight() {
        if (this.playerPos.left <= this.gameSize.w * .7) {
            this.playerPos.left += this.playerVel.left
            this.updatePosition()
        }
    }

    jump() {
        this.playerPos.top -= this.playerVel.jumpSpeed;
        this.playerVel.top -= 10;
    }
    onBase() {
        return (this.playerPos.top) >= this.base
    }
    move(keys) {
        if (!this.onBase()) {
            this.playerVel.top += this.playerVel.gravity;
            this.playerPos.top += this.playerVel.top
        } else {
            this.playerVel.top = 1
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