class WinScreen {
    constructor(gameSize, gameScreen) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.backgroundSize = {
            w: gameSize.w,
            h: gameSize.h,
        }
        this.position = {
            left: (this.gameSize.w / 2) - 150,
            top: (this.gameSize.h / 2) - 200
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

        this.octopus = document.createElement("figure")
        this.octopus.style.backgroundImage = ("url('./img/win.png')")
        this.octopus.style.position = "absolute"
        this.octopus.style.width = "400px"
        this.octopus.style.height = "600px"
        this.octopus.style.left = `${this.position.left}px`
        this.octopus.style.top = `${this.position.top}px`

        this.octopus.style.backgroundSize = "100%"
        this.octopus.style.backgroundRepeat = "no-repeat"
        this.gameScreen.appendChild(this.octopus)

        this.win = document.createElement("figure")
        this.win.style.backgroundImage = ("url('./img/winText.png')")
        this.win.style.position = "absolute"
        this.win.style.width = "200px"
        this.win.style.height = "200px"
        this.win.style.left = `${this.position.left + 95}px`
        this.win.style.top = `${this.position.top + 350}px`

        this.win.style.backgroundSize = "100%"
        this.win.style.backgroundRepeat = "no-repeat"
        this.gameScreen.appendChild(this.win)
    }
}