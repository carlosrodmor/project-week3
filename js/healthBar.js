class Health {
    constructor(gameScreen, gameSize, player) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.player = player
        this.Value = {
            minValue: 0,
            maxValue: this.player.health,
        }
        this.size = {
            w: this.player.health * 6,
            h: 50
        }
        this.init()
    }

    init() {
        this.progressElement = document.createElement("div")
        this.progressElement.style.backgroundImage = 'url("./img/gradient.avif")'
        this.progressElement.style.backgroundSize = "cover"
        this.progressElement.style.borderRadius = "5px"
        //this.progressElement.style.borderTopRightRadius = "30px"
        //this.progressElement.style.borderBottomRightRadius = "30px"
        this.progressElement.style.position = "absolute"
        this.progressElement.style.width = `${this.size.w}px`
        this.progressElement.style.height = `${this.size.h}px`
        this.progressElement.style.left = `100px`
        this.progressElement.style.top = `20px`

        this.progressBox = document.createElement("div")
        this.progressBox.style.backgroundColor = "white"
        this.progressBox.style.border = "solid 2px white"
        this.progressBox.style.borderRadius = "5px"
        // this.progressBox.style.borderTopRightRadius = "30px"
        // this.progressBox.style.borderBottomRightRadius = "30px"
        this.progressBox.style.position = "absolute"
        this.progressBox.style.width = `${this.size.w}px`
        this.progressBox.style.height = `${this.size.h}px`
        this.progressBox.style.left = `99px`
        this.progressBox.style.top = `19px`

        this.gameScreen.appendChild(this.progressBox)
        this.gameScreen.appendChild(this.progressElement)
    }
    healthControl() {

        this.size.w = this.player.health * 6
        this.updatePosition()


    }

    updatePosition() {
        this.progressElement.style.width = `${this.size.w}px`
    }


} 