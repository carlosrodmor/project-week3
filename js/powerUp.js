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
            w: 70,
            h: 70,
        }

        this.bonusSprite = {
            backgroundPositionX: 0,
            totalFrames: 4,
            currentFrame: 1,
            frameSpeed: 8,
        }
        this.init()
    }
    init() {
        this.powerUpElement = document.createElement("div")
        //this.powerUpElement.style.backgroundColor = "black"
        this.powerUpElement.style.position = "absolute"
        this.powerUpElement.style.width = `${this.powerUpSize.w}px`
        this.powerUpElement.style.height = `${this.powerUpSize.h}px`
        this.powerUpElement.style.left = `${this.position.x}px`
        this.powerUpElement.style.top = `${this.position.y}px`

        this.powerUpElement.style.backgroundSize = `${this.powerUpSize.h * 4}px ${this.powerUpSize.h}px`
        this.powerUpElement.style.backgroundImage = "url('./img/bonus.png')"
        this.powerUpElement.style.overflow = "hidden"
        this.powerUpElement.style.backgroundRepeat = "no-repeat"
        this.powerUpElement.style.backgroundPositionX = `0px`
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
    move(keys, frames) {
        keys.RIGHT.pressed && this.moveRight()
        keys.LEFT.pressed && this.moveLeft()
        this.animatedSprite(frames)
    }
    updatePos() {
        this.powerUpElement.style.left = `${this.position.x}px`
        this.powerUpElement.style.top = `${this.position.y}px`
    }

    animatedSprite(frames) {
        if (frames % this.bonusSprite.frameSpeed == 0) {
            this.bonusSprite.currentFrame++
        }
        if (this.bonusSprite.currentFrame >= this.bonusSprite.totalFrames) {
            this.bonusSprite.currentFrame = 0
        }
        this.bonusSprite.backgroundPositionX = -this.powerUpSize.h * this.bonusSprite.currentFrame
        this.updateSprite()
    }
    updateSprite() {
        this.powerUpElement.style.backgroundPositionX = `${this.bonusSprite.backgroundPositionX}px`
    }
}