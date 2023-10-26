class GameoverScreen {
    constructor(gamesize, gamescreen) {
        this.size = {
            w: gamesize.w,
            h: gamesize.h
        },
            this.gameScreen = gamescreen,
            this.gamesize = gamesize,
            this.init()
    }
    init() {
        this.gameoverElement = document.createElement("div")
        this.gameoverElement.style.backgroundImage = 'url("./img/GO.png")'
        this.gameoverElement.style.backgroundSize = "100%"
        this.gameoverElement.style.borderRadius = "30px"
        this.gameoverElement.style.position = "absolute"
        this.gameoverElement.style.width = `500px`
        this.gameoverElement.style.height = `400px`
        this.gameoverElement.style.left = `${this.gamesize.w / 3}px`
        this.gameoverElement.style.top = `${this.gamesize.h / 4}px`
        this.gameScreen.appendChild(this.gameoverElement)
    }
}
