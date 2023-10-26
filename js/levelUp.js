class LevelUp {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.levelUpSize = {
            w: 50,
            h: 50,
        }
        this.position = {
            x: 350,
            y: 20,
        }

        this.init()

    }
    init() {
        this.LevelUpElement = document.createElement("figure")
        this.LevelUpElement.style.backgroundImage = "url('./img/level.png')"
        this.LevelUpElement.style.backgroundSize = "cover"
        this.LevelUpElement.style.position = "absolute"
        this.LevelUpElement.style.width = `${this.levelUpSize.w}px`
        this.LevelUpElement.style.height = `${this.levelUpSize.h}px`
        this.LevelUpElement.style.left = `${this.position.x}px`
        this.LevelUpElement.style.top = `${this.position.y}px`

        this.gameScreen.appendChild(this.LevelUpElement)
    }
    hide() {
        this.LevelUpElement.style.display = "none"
    }
}
