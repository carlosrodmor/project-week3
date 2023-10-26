class StartScreen {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.backgroundSize = {
            w: gameSize.w,
            h: gameSize.h,
        }
        this.position = {
            left: (this.gameSize.w / 2) - 100,
            top: this.gameSize.h / 2
        }
        this.init()

    }
    init() {
        this.backgroundElement = document.createElement("figure")
        this.backgroundElement.style.backgroundImage = ("url('./img/5.png')")
        this.backgroundElement.style.position = "absolute"
        this.backgroundElement.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement.style.backgroundSize = "100%"
        this.gameScreen.appendChild(this.backgroundElement)

        this.button = document.createElement("figure")
        this.button.style.backgroundImage = ("url('./img/start.webp')")
        this.button.style.position = "absolute"
        this.button.style.width = "400px"
        this.button.style.height = "78px"
        this.button.style.left = `${this.position.left}px`
        this.button.style.top = `${this.position.top}px`

        this.button.style.backgroundSize = "50%"
        this.button.style.backgroundRepeat = "no-repeat"
        this.gameScreen.appendChild(this.button)

        this.text = document.createElement("figure")
        this.text.style.backgroundImage = ("url('./img/text.png')")
        this.text.style.position = "absolute"
        this.text.style.width = "400px"
        this.text.style.height = "150px"
        this.text.style.left = `${this.position.left - 100}px`
        this.text.style.top = `${this.position.top + 65}px`

        this.text.style.backgroundSize = "100%"
        this.text.style.backgroundRepeat = "no-repeat"
        this.gameScreen.appendChild(this.text)

        this.controls = document.createElement("figure")
        this.controls.style.backgroundImage = ("url('./img/keys.png')")
        this.controls.style.position = "absolute"
        this.controls.style.width = "100px"
        this.controls.style.height = "100px"
        this.controls.style.left = `${this.position.left + 50}px`
        this.controls.style.top = `${this.position.top + 250}px`

        this.controls.style.backgroundSize = "cover"
        this.controls.style.backgroundRepeat = "no-repeat"
        this.gameScreen.appendChild(this.controls)

    }
    hide() {
        this.backgroundElement.style.display = "none"
        this.text.style.display = "none"
        this.controls.style.display = "none"
        this.button.style.display = "none"

    }
}