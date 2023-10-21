class movePlatform extends Platforms {
    constructor(gameSize, gameScreen, platform, player) {
        super(gameSize, gameScreen, platform, player) //parametros heredados de Platforms

        this.movementRange = {  //parametro propio 
            min: this.position.horizontalPos,
            max: this.position.horizontalPos + this.platformSize.width * 2.5
        }
        this.init()
    }

    move() {
        if (this.position.horizontalPos <= this.movementRange.min) {
            console.log("estoy en min")
            this.position.horizontalPos -= this.speed
            this.updatePos()
        } else if (this.position.horizontalPos >= this.movementRange.max) {
            console.log("estoy en max")
            this.position.horizontalPos += this.speed
            this.updatePos()
        } else {
            console.log("estoy en else")
        }


        this.position.horizontalPos += this.speed
    }
}