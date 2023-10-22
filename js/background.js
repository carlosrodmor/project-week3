class Background {

    constructor(gameSize, gameScreen) {
        this.gameScreen = gameScreen

        this.backgroundSize = {
            width: gameSize.w,
            heigth: gameSize.h,

        }
        this.backgroundPosition = { left: 0, top: 0 }
        this.init()
    }



    init() {
        this.backgroundElement = document.createElement("div")
        //this.backgroundElement.src = "./img/gradient.jpg"
        this.backgroundElement.style.backgroundColor = "green"

        this.backgroundElement.style.position = "absolute"
        this.backgroundElement.style.width = `${this.backgroundSize.width}px`
        this.backgroundElement.style.height = `${this.backgroundSize.heigth}px`

        this.gameScreen.appendChild(this.backgroundElement)
    }
    move() {
        this.backgroundPosition.left += 10
        this.updatePosition()
    }
    updatePosition() {
        this.backgroundElement.style.left = `${this.backgroundPosition.left}px`
    }
}