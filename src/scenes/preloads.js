// Clase Preloads, para separar los preloads y tener mejor orden
class Preloads extends Phaser.Scene { // Se extiende de Phaser.Scene porque es una escena
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Preloads")
    }

    preload() {
        this.load.image('sad_cow', 'ejemplo-escenas/public/assets/images/sad_cow.png')
        this.load.image('phaser_logo', 'ejemplo-escenas/public/assets/images/phaser_logo.png')
        this.load.image('mainmenu_bg', 'ejemplo-escenas/public/assets/images/main_menu_background.png')
        this.load.image('sky', 'ejemplo-escenas/public/assets/images/sky.png');
        this.load.image('ground', 'ejemplo-escenas/public/assets/images/platform.png');
        this.load.image('star', 'ejemplo-escenas/public/assets/images/star.png');
        this.load.image('bomb', 'ejemplo-escenas/public/assets/images/bomb.png');
        this.load.spritesheet('dude', 'ejemplo-escenas/public/assets/images/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    create() {
        // Pasa directamente a la escena del menú principal
        this.scene.start('MainMenu');
    }
}
