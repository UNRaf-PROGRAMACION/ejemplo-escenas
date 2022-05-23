// Clase Preloads, para separar los preloads y tener mejor orden
class Preloads extends Phaser.Scene { // Se extiende de Phaser.Scene porque es una escena
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Preloads")
    }

    preload() {
        this.load.image('sad_cow', 'assets/images/sad_cow.png')
        this.load.image('phaser_logo', 'assets/images/phaser_logo.png')
        this.load.image('mainmenu_bg', 'assets/images/main_menu_background.png')
        this.load.image('sky', 'assets/images/sky.png');
        this.load.image('ground', 'assets/images/platform.png');
        this.load.image('star', 'assets/images/star.png');
        this.load.image('bomb', 'assets/images/bomb.png');
        this.load.spritesheet('dude', 'assets/images/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    create() {
        // Pasa directamente a la escena del menú principal
        this.scene.start('MainMenu');
    }
}
