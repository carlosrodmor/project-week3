class Health {
    constructor(gameScreen, gameSize, player) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.player = player
        this.Value = {
            minValue: 0,
            maxValue: this.player.health,
        }
        this.init()
    }

    init() {
        this.progressElement = document.createElement("progress")
        this.progressElement.style.backgroundColor = "black"

        this.progressElement.style.position = "absolute"
        this.progressElement.style.width = `200px`
        this.progressElement.style.height = `50px`
        this.progressElement.style.left = `100px`
        this.progressElement.style.top = `20px`
        this.gameScreen.appendChild(this.progressElement)
        this.progressElement.setAttribute("max", `${this.Value.maxValue}`)
        this.progressElement.setAttribute("value", `${this.player.health}`)
    }
    decrease() {

    }



} 