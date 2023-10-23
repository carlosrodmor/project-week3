
const Game = {

    gameScreen: document.querySelector("#game-screen"),
    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    player: undefined,
    background: undefined,
    isOnPlatform: false,
    currentPlatform: undefined,
    bases: [],
    objects: [],
    //nonStaticObject: [],   ====> Siguiente iteracion

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

        //base.forEach(elm => this.bases.push(new Base(this.gameSize, this.gameScreen, elm, this.player)))

        /*  ====> Siguiente iteracion <====
        nonStaticPlatform.forEach(elm => {
            this.nonStaticObject.push = new movePlatform(this.gameSize, this.gameScreen, elm, this.player)
        })*/
    },

    start() {
        this.createObjects()
        this.gameLoop()
    },

    gameLoop() {
        this.moveAll()
        window.requestAnimationFrame(() => this.gameLoop())
    },

    moveAll() {
        this.player.move(this.keys)
        this.bases.forEach(elm => elm.move(this.keys))
        this.objects.forEach(elm => elm.move(this.keys))
        this.checkPlatform()
        this.isCollision()
    },
    /*isCollision() {
        this.isOnPlatform = this.objects.some(eachObj => {
            return (eachObj.position.horizontalPos < this.player.playerPos.left + this.player.playerSize.w &&
                eachObj.position.horizontalPos + eachObj.platformSize.width > this.player.playerPos.left &&
                //eachObj.position.verticalPos < this.player.playerPos.top + this.player.playerSize.h // esta debajo
                eachObj.position.verticalPos > this.player.playerPos.top)
        })
        console.log(this.isOnPlatform)
    },*/
    isCollision() {
        if (this.isOnPlatform) {
            console.log(this.currentPlatform)
            //this.player.base = this.currentPlatform.position.verticalPos
        } else {
            this.player.base = this.gameSize.h - this.player.playerSize.h - 50
        }
    },

    checkPlatform() {
        this.objects.some(eachObj => {
            if (eachObj.position.horizontalPos < this.player.playerPos.left + this.player.playerSize.w &&
                eachObj.position.horizontalPos + eachObj.platformSize.width > this.player.playerPos.left &&
                //eachObj.position.verticalPos < this.player.playerPos.top + this.player.playerSize.h // esta debajo
                eachObj.position.verticalPos > this.player.playerPos.top) {
                this.isOnPlatform = true
                this.checkPlatform = eachObj
                console.log(this.isOnPlatform)
            }
        })
    }
}

// this.nonStaticObject.forEach(elm => {
//   console.log(elm)
//dejamos de momento para proxima iteracion