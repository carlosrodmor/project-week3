class Background {

    constructor(gameSize, gameScreen, p) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.player = p
        this.backgroundSize = {
            width: this.gameSize.w,
            heigth: this.gameSize.h,

        }
        this.backgroundPosition1 = { left: 0, top: 0 }
        this.backgroundPosition2 = { left: this.gameSize.w, top: 0 }
        this.speed = 8
        this.backgroundPosition = { left: 0, top: 0 }
        this.init()
    }



    init() {
        this.backgroundElement1 = document.createElement("figure")
        this.backgroundElement2 = document.createElement("figure")
        //this.backgroundElement.style.backgroundColor = "green"
        this.backgroundElement1.style.backgroundImage = 'url("./img/5.png")'
        this.backgroundElement2.style.backgroundImage = 'url("./img/5.png")'

        this.backgroundElement1.style.position = "absolute"
        this.backgroundElement1.style.zIndex = "-1"
        this.backgroundElement1.style.width = `${this.backgroundSize.width}px`
        this.backgroundElement1.style.height = `${this.backgroundSize.heigth}px`
        this.backgroundElement1.style.backgroundSize = ("100%")

        this.backgroundElement2.style.position = "absolute"
        this.backgroundElement2.style.zIndex = "-1"
        this.backgroundElement2.style.width = `${this.backgroundSize.width}px`
        this.backgroundElement2.style.height = `${this.backgroundSize.heigth}px`
        this.backgroundElement2.style.backgroundSize = ("100%")




        this.gameScreen.appendChild(this.backgroundElement2)
        this.gameScreen.appendChild(this.backgroundElement1)
    }


    moveRight() {
        if (this.player.playerPos.left >= this.gameSize.w * .3) {
            this.backgroundPosition1.left -= this.speed
            this.backgroundPosition2.left -= this.speed
            this.updatePosition()
        }
    }
    moveLeft() {
        if (this.player.playerPos.left <= this.gameSize.w * .2) {
            this.backgroundPosition1.left += this.speed
            this.backgroundPosition2.left += this.speed
            this.updatePosition()
        }
    }
    move(keys) {
        keys.RIGHT.pressed && this.moveRight()
        keys.LEFT.pressed && this.moveLeft()
        // si el left + width de la primera imagen es igual a 0 el
        if (this.backgroundPosition1.left <= -this.gameSize.w) {
            this.backgroundPosition1.left = 0
            this.backgroundPosition2.left = this.gameSize.w
            this.updatePosition()
        }
        // if (this.backgroundPosition2.left <= this.gameSize.w) {
        //     this.backgroundPosition2.left = -this.gameSize.w
        //     this.backgroundPosition1.left = 0
        //     this.updatePosition()
        // }
    }
    updatePosition() {
        this.backgroundElement1.style.left = `${this.backgroundPosition1.left}px`
        this.backgroundElement2.style.left = `${this.backgroundPosition2.left}px`
    }
}