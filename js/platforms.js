class Platforms {
    constructor(gameSize, gameScreen, alto, ancho) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.position = {
            horizontalPos: ancho,
            verticalPos: alto
        },
            this.platformSize = { width: 200, heigth: 50 }
        //this.positions = { left: 0, top: 500 }
        this.init()
    }
    init() {
        console.log("INIT DE PLATAFORMAS")

        this.platformElement = document.createElement("div")
        this.platformElement.style.backgroundColor = "white"

        this.platformElement.style.position = "absolute"
        this.platformElement.style.width = `${this.platformSize.width}px`
        this.platformElement.style.height = `${this.platformSize.heigth}px`
        this.platformElement.style.top = `${this.gameSize.h - this.position.verticalPos}px`
        this.platformElement.style.left = `${this.gameSize.w - this.position.horizontalPos}px`
        this.gameScreen.appendChild(this.platformElement)
    }
}