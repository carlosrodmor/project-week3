class Enemies {
    constructor(gameSize, gameScreen, player, speed = 10) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.player = player

        this.enemiesSize = {
            x: 80,
            y: 80,
        }
        this.enemiesPos = {
            x: this.gameSize.w,
            y: Math.random() * this.gameSize.h
        }
        this.enemiesVel = speed

        this.enemySprite = {
            backgroundPositionX: 0,
            totalFrames: 6,
            currentFrame: 1,
            frameSpeed: 10,
        }

        this.init()
    }
    init() {
        this.enemiesElement = document.createElement("div")
        //this.enemiesElement.style.backgroundColor = "yellow"
        this.enemiesElement.style.position = "absolute"
        this.enemiesElement.style.width = `${this.enemiesSize.x}px`
        this.enemiesElement.style.height = `${this.enemiesSize.y}px`
        this.enemiesElement.style.left = `${this.enemiesPos.x}px`
        this.enemiesElement.style.top = `${this.enemiesPos.y}px`

        this.enemiesElement.style.backgroundImage = "url('./img/Attack.png')"
        this.enemiesElement.style.backgroundSize = `480px 80px`
        this.enemiesElement.style.overflow = "hidden"
        this.enemiesElement.style.backgroundRepeat = "no-repeat"
        this.enemiesElement.style.backgroundPositionX = `0px`

        this.gameScreen.appendChild(this.enemiesElement)


    }
    move(frames) {
        this.enemiesPos.x -= this.enemiesVel
        this.animatedSprite(frames)
        this.updatePos()
    }
    updatePos() {
        this.enemiesElement.style.left = `${this.enemiesPos.x}px`
        this.enemiesElement.style.top = `${this.enemiesPos.y}px`
    }
    animatedSprite(frames) {
        if (frames % this.enemySprite.frameSpeed == 0) {
            this.enemySprite.currentFrame++
        }
        if (this.enemySprite.currentFrame >= this.enemySprite.totalFrames) {
            this.enemySprite.currentFrame = 0
        }
        this.enemySprite.backgroundPositionX = -this.enemiesSize.y * this.enemySprite.currentFrame
        this.updateSprite()
    }
    updateSprite() {
        this.enemiesElement.style.backgroundPositionX = `${this.enemySprite.backgroundPositionX}px`
    }
}
