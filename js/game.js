const Game = {

    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    background: undefined,
    platform1: undefined,
    platform2: undefined,
    base: undefined,

    init() {
        this.setDimensions()
        //this.setEventListeners()  ====>   controles de teclado
        this.start()             // ====>   iniciar el juego 
    },

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },

    //setEventListeners    ====> para escuchar teclas

    createObjects() {
        console.log(this.gameSize, this.gameScreen)
        this.background = new Background(this.gameSize, this.gameScreen)
        //this.base = new Platforms(this.gameSize, this.gameScreen, 50)
        this.platform1 = new Platforms(this.gameSize, this.gameScreen, 200, 900)
        this.platform2 = new Platforms(this.gameSize, this.gameScreen, 400, 100)
        //this.player = new Player()   ===> crear una instancia del jugador

    },
    // tiene 2 objetos background que dentro tienen fondo y array de obstaculos 

    start() {
        this.createObjects()
    }

    //gameLoop()   ===> motor con intevalos 

    //drawAll() ===> metodo con logica de mover personaje y mapa 

    //clearAll() ===> metodo con el que eliminamos elementos fuera de pantalla

    /*gameOver() {
    alert('GAME OVER')*/
}