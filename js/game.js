const Game = {
    gameScreen: document.querySelector("#game-screen"),
    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    player: undefined,
    background: undefined,
    objects: [],
    enemies: undefined,
    bonuses: undefined,
    onFloor: true,
    keys: {
        LEFT: { code: "ArrowLeft", pressed: false },
        RIGHT: { code: "ArrowRight", pressed: false },
        UP: { code: "ArrowUp" }
    },
    frameCounter: 0,
    density: 50,
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
                    if (this.onFloor === true) {
                        this.player.jump()
                        this.onFloor = false
                    }
                    break;
            }
            document.onkeyup = (e) => {
                switch (e.code) {
                    case this.keys.RIGHT.code:
                        this.keys.RIGHT.pressed = false
                        break;
                    case this.keys.LEFT.code:
                        this.keys.LEFT.pressed = false
                        break;
                }
            }
        }
    },
    createObjects() {
        this.player = new Player(this.gameSize, this.gameScreen)
        this.background = new Background(this.gameSize, this.gameScreen, this.player)
        const platform0pos = { w: 100000, h: 50, x: 0, y: this.gameSize.h - 50 }
        const platform0 = new Platforms(this.gameSize, this.gameScreen, platform0pos, this.player)
        this.objects.push(platform0)
        this.enemies = []
        platforms.forEach(elm => this.objects.push(new Platforms(this.gameSize, this.gameScreen, elm, this.player)))
        this.bonuses = []
        this.healthBar = new Health(this.gameScreen, this.gameSize, this.player)

    },
    start() {
        this.createObjects()
        this.gameLoop()
    },
    gameLoop() {
        this.frameCounter > 5000 ? this.frameCounter = 0 : this.frameCounter++
        this.moveAll()
        this.generateEnemies()
        this.generatePowerUp()
        this.clearAll()
        this.gameOver()
        console.log(this.powerup)
        window.requestAnimationFrame(() => this.gameLoop())

    },
    moveAll() {
        this.isCollision()
        this.isCollisionDown()
        this.enemyCollision()
        this.powerUpCollision()
        this.player.move(this.keys, this.frameCounter)
        this.background.move(this.keys)
        this.objects.forEach(elm => elm.move(this.keys))
        this.enemies.forEach(elm => elm.move(this.frameCounter))
        this.bonuses.forEach(elm => elm.move(this.keys, this.frameCounter))



    },
    isCollision() {
        this.objects.forEach(eachPlatform => {
            //colision arriba
            if (this.player.playerPos.left < eachPlatform.position.horizontalPos + eachPlatform.platformSize.width - 10 &&
                this.player.playerPos.left + this.player.playerSize.w > eachPlatform.position.horizontalPos + 10 &&
                this.player.playerPos.top < eachPlatform.position.verticalPos + 10 &&  //define la cabeza arriba de plataforma + 10
                this.player.playerSize.h + this.player.playerPos.top > eachPlatform.position.verticalPos) {  //define los pies debajo de top de alguna plataforma 

                this.player.playerPos.top = eachPlatform.position.verticalPos - this.player.playerSize.h
                this.player.playerVel.top = 0
                this.onFloor = true
            }

        })

    },
    isCollisionDown() {
        let playerRight = this.player.playerPos.left + this.player.playerSize.w
        let playerLeft = this.player.playerPos.left
        let playerHead = this.player.playerPos.top
        let playerBottom = this.player.playerSize.h + this.player.playerPos.top

        this.objects.forEach(eachPlatform => {

            let platformRight = eachPlatform.position.horizontalPos + eachPlatform.platformSize.width
            let platformLeft = eachPlatform.position.horizontalPos
            let platformTop = eachPlatform.position.verticalPos
            let platformBottom = eachPlatform.position.verticalPos + eachPlatform.platformSize.heigth

            if (
                playerLeft < platformRight - 10 &&
                playerRight > platformLeft + 10 &&
                playerHead > platformTop - 10 &&
                playerBottom > platformTop) {
                if (this.player.playerVel.jumpSpeed > playerHead - platformBottom) {
                    this.player.playerVel.jumpSpeed = playerHead - platformBottom
                    this.player.playerVel.top = 10
                    //console.log(this.player.playerVel.jumpSpeed)
                } else {
                    this.player.playerVel.jumpSpeed = 250
                }




            }
        })
    },

    enemyCollision() {
        let playerRight = this.player.playerPos.left + this.player.playerSize.w
        let playerHead = this.player.playerPos.top
        let playerBottom = this.player.playerSize.h + this.player.playerPos.top
        let playerleft = this.player.playerPos.left

        this.enemies.forEach(eachEnemy => {
            let enemyLeft = eachEnemy.enemiesPos.x
            let enemyRight = eachEnemy.enemiesPos.x + eachEnemy.enemiesSize.x
            let enemyTop = eachEnemy.enemiesPos.y
            let enemyBottom = eachEnemy.enemiesPos.y + eachEnemy.enemiesSize.y

            if (
                enemyLeft <= playerRight &&
                enemyTop <= playerBottom &&
                enemyBottom >= playerHead &&
                enemyRight >= playerleft
            ) {
                this.player.health -= 1
                eachEnemy.enemiesElement.remove()
                console.log(this.player.health)
            }
        })
    },
    generateEnemies() {
        if (this.frameCounter % this.density === 0) {
            this.enemies.push(new Enemies(this.gameSize, this.gameScreen))
        }
    },

    generatePowerUp() {
        if (this.frameCounter % (this.density * 6) === 0) {
            console.log("POWER UP")
            this.bonuses.push(new PowerUp(this.gameScreen, this.gameSize, this.player))
        }
    },
    powerUpCollision() {
        let playerRight = this.player.playerPos.left + this.player.playerSize.w
        let playerHead = this.player.playerPos.top
        let playerBottom = this.player.playerSize.h + this.player.playerPos.top
        let playerleft = this.player.playerPos.left
        this.bonuses.forEach(eachPowerUp => {
            let powerUpLeft = eachPowerUp.position.x
            let powerUpRight = eachPowerUp.position.x + eachPowerUp.powerUpSize.w
            let powerUpTop = eachPowerUp.position.y
            let powerUpBottom = eachPowerUp.position.y + eachPowerUp.powerUpSize.h
            if (
                powerUpLeft <= playerRight &&
                powerUpTop <= playerBottom &&
                powerUpBottom >= playerHead &&
                powerUpRight >= playerleft
            ) {
                alert("BONUS")

            }
        })
    },

    clearAll() {
        this.enemies.forEach((elm, idx) => {
            if (elm.enemiesPos.x <= 0) {
                elm.enemiesElement.remove()
                this.enemies.splice(idx, 1)
            }
        })
        this.bonuses.forEach((elm, idx) => {
            if (elm.position.x <= 0) {
                elm.powerUpElement.remove()
                this.bonuses.splice(idx, 1)
            }
        })


    },
    gameOver() {
        if (this.player.health === 0) {
            alert("MUERTE")
        }
        if (this.player.playerPos.top + this.player.playerSize.h >= this.gameSize.h - 80) {
            alert("FLOOR")
        }
    },


}
