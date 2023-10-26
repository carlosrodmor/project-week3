class Sounds {
    constructor(gameScreen, url) {
        this.gameScreen = gameScreen
        this.soundUrl = url
        this.init()

    }
    init() {
        this.soundsElement = document.createElement("audio")
        this.soundsElement.src = this.soundUrl;
        this.soundsElement.setAttribute("preload", "auto")
        //this.soundsElement.setAttribute("controls", "none")
        this.soundsElement.style.display = "none"
        this.gameScreen.appendChild(this.soundsElement)

    }
    play() {
        this.soundsElement.play()
    }
    pause() {
        this.soundsElement.pause()
    }
}