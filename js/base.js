class Base extends Platforms {
    constructor(gameSize, gameScreen, platform, player) {
        super(gameSize, gameScreen, platform, player)
        this.position.verticalPos = this.gameSize.h - this.platformSize.heigth
        this.updatePos()
    }

}