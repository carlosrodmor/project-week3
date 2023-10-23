
const Game = {

    gameScreen: document.querySelector("#game-screen"),
    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    player: undefined,
    background: undefined,
    currentPlatform: undefined,
    objects: [],
    keys: {
        LEFT: { code: "ArrowLeft", pressed: false },
        RIGHT: { code: "ArrowRight", pressed: false },
        UP: { code: "ArrowUp" }
    },

    init() {
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },

    setEventListeners() {
        document.onkeydown = (e) => {
            //console.log("Tecla presionada")
            switch (e.code) {
                case this.keys.RIGHT.code:
                    this.keys.RIGHT.pressed = true
                    break;

                case this.keys.LEFT.code:
                    this.keys.LEFT.pressed = true
                    break;

                case this.keys.UP.code:
                    this.player.jump()
                    break;
            }

            document.onkeyup = (e) => {
                //console.log("Tecla levantada")
                switch (e.code) {
                    case this.keys.RIGHT.code:
                        this.keys.RIGHT.pressed = false
                        //console.log(this.keys.RIGHT.pressed)

                        break;

                    case this.keys.LEFT.code:
                        this.keys.LEFT.pressed = false
                        //console.log(this.keys.LEFT.pressed)
                        break;
                }
            }
        }
    },

    createObjects() {
        this.background = new Background(this.gameSize, this.gameScreen)
        this.player = new Player(this.gameSize, this.gameScreen)

        platforms.forEach(elm => this.objects.push(new Platforms(this.gameSize, this.gameScreen, elm, this.player)))

    },

    start() {
        this.createObjects()
        this.gameLoop()
    },

    gameLoop() {
        this.moveAll()
        window.requestAnimationFrame(() => this.gameLoop())
    },

    playerSelector: document.getElementById("player"),

    moveAll() {
        this.isCollision()
        this.player.move(this.keys)
        this.objects.forEach(elm => elm.move(this.keys))

    },

    isCollision() {

    }
}

