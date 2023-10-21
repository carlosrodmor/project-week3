
const Game = {

    gameScreen: document.querySelector("#game-screen"),
    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    player: undefined,
    background: undefined,

    objects: [],
    //nonStaticObject: [],   ====> Siguiente iteracion


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

            if (e.code === "ArrowRight") {
                this.objects.forEach(elm => elm.moveRight())
                this.player.moveRight()
            }
            if (e.code === "ArrowLeft") {
                this.objects.forEach(elm => elm.moveLeft())
                this.player.moveLeft()
            }
            if (e.code === "ArrowUp") {
                this.player.jump()
            }
        }
    },

    createObjects() {
        this.background = new Background(this.gameSize, this.gameScreen)
        this.player = new Player(this.gameSize, this.gameScreen)
        platformDimensions.forEach(elm => {
            this.objects.push(new Platforms(this.gameSize, this.gameScreen, elm, this.player))
        })
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
        if (this.player.playerPos.top < this.gameScreen.h) { //esta en el aire
            console.log("if se ha cumplido")
            this.player.gravity()
        }
        window.requestAnimationFrame(() => this.gameLoop())
    },

    //drawAll() ===> metodo con logica de mover personaje y mapa 

    //clearAll() ===> metodo con el que eliminamos elementos fuera de pantalla

    //gameOver() {
    //alert('GAME OVER')
    //}
}

// this.nonStaticObject.forEach(elm => {
//   console.log(elm)
//dejamos de momento para proxima iteracion