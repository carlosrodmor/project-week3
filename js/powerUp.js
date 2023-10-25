class PowerUp {
    constructor(gameScreen, gameSize, player) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.player = player

        this.speed = 8
        this.position = {
            x: Math.random() * this.gameSize.w,
            y: Math.random() * this.gameSize.h
        }
        this.powerUpSize = {
            w: 20,
            h: 20,
        }
        this.init()
    }
    init() {
        this.powerUpElement = document.createElement("figure")
        this.powerUpElement.style.backgroundColor = "black"
        //this.powerUpElement.style.backgroundImage = "url('./img/)"
        this.powerUpElement.style.position = "absolute"
        this.powerUpElement.style.width = `${this.powerUpSize.w}px`
        this.powerUpElement.style.height = `${this.powerUpSize.h}px`
        this.powerUpElement.style.left = `${this.position.x}px`
        this.powerUpElement.style.top = `${this.position.y}px`
        this.gameScreen.appendChild(this.powerUpElement)
    }
    moveRight() {
        if (this.player.playerPos.left >= this.gameSize.w * .3) {
            this.position.x -= this.speed
            this.updatePos()
        }
    }
    moveLeft() {
        if (this.player.playerPos.left <= this.gameSize.w * .2) {
            this.position.x += this.speed
            this.updatePos()
        }
    }
    move(keys) {
        keys.RIGHT.pressed && this.moveRight()
        keys.LEFT.pressed && this.moveLeft()
    }
    updatePos() {
        this.powerUpElement.style.left = `${this.position.x}px`
        this.powerUpElement.style.top = `${this.position.y}px`
    }
}