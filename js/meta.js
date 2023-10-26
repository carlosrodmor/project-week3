class Meta extends Platforms {
    constructor(gameSize, gameScreen, coordinates, player) {
        super(gameSize, gameScreen, coordinates, player)
        this.init()
    }
    init() {
        console.log("CREADO META")
        this.metaElement = document.createElement("figure")
        //this.metaElement.style.backgroundColor = "black"
        this.metaElement.style.backgroundImage = "url('./img/meta2.png')"
        this.metaElement.style.backgroundSize = "100%"
        this.metaElement.style.backgroundRepeat = "no-repeat"
        this.metaElement.style.position = "absolute"
        this.metaElement.style.width = `${this.platformSize.width}px`
        this.metaElement.style.height = `${this.platformSize.heigth}px`
        this.metaElement.style.top = `${this.position.verticalPos}px`
        this.metaElement.style.left = `${this.position.horizontalPos}px`

        this.gameScreen.appendChild(this.metaElement)
    }
    metaCollision() {

        if (this.playerReference.playerPos.left < this.position.horizontalPos + this.platformSize.width - 10 &&
            this.playerReference.playerPos.left + this.playerReference.playerSize.w > this.position.horizontalPos + 10 &&
            this.playerReference.playerPos.top < this.position.verticalPos + 10 &&
            this.playerReference.playerSize.h + this.playerReference.playerPos.top > this.position.verticalPos) {
            return true
        }
    }

    updatePos() {
        this.metaElement.style.top = `${this.position.verticalPos}px`
        this.metaElement.style.left = `${this.position.horizontalPos}px`
    }
}