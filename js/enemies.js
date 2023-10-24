class Enemies {
    constructor(gameSize, gameScreen, player) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.player = player

        this.enemiesSize = {
            x: 60,
            y: 60,
        }
        this.enemiesPos = {
            x: this.gameSize.w,
            y: Math.random() * this.gameSize.h
        }
        this.enemiesVel = 10
        this.init()
    }
    init() {
        this.enemiesElement = document.createElement("div")
        this.enemiesElement.style.backgroundColor = "yellow"
        this.enemiesElement.style.position = "absolute"
        this.enemiesElement.style.width = `${this.enemiesSize.x}px`
        this.enemiesElement.style.height = `${this.enemiesSize.y}px`
        this.enemiesElement.style.left = `${this.enemiesPos.x}px`
        this.enemiesElement.style.top = `${this.enemiesPos.y}px`

        this.gameScreen.appendChild(this.enemiesElement)


    }
    move() {
        this.enemiesPos.x -= this.enemiesVel
        this.updatePos()
    }
    updatePos() {
        this.enemiesElement.style.left = `${this.enemiesPos.x}px`
        this.enemiesElement.style.top = `${this.enemiesPos.y}px`
    }
}
