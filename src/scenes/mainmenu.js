// Clase Boton, para no repetir tanto codigo
class Boton {
    constructor(x, y, label, scene, callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ 
                backgroundColor: '#fff', 
                fontSize: '50px', 
                fill: '#000', 
                fontFamily: 'Arial'
            })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: '#0000ff' }))
            .on('pointerout', () => button.setStyle({ fill: '#000' }));
    }
}

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
class MainMenu extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("MainMenu")
    }

    create() {
        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mainmenu_bg').setScale(1.1);
        // Logo de Phaser
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY/1.5, 'phaser_logo');

        // Boton para comenzar a jugar
        const boton = new Boton(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'Play', this, () => {
            // Instrucción para pasar a la escena Play
            this.scene.start("Play");
        });
    }
}