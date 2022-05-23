// Clase Retry, donde se crean los botones, el logo y el fondo del menú derrota
class Retry extends Phaser.Scene {
    constructor() {
        super("Retry")
    }

    create() {
        // Fondo del menú derrota
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mainmenu_bg').setScale(1.1);
        // Vaca triste
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY/1.5, 'sad_cow');
        // Texto que muestra el puntaje maximo alcanzado
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, `Puntaje alcanzado: ${score}`).setOrigin(0.5);

        // Boton para volver a jugar
        const boton = new Boton(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'Retry', this, () => {
            // Instrucción para pasar a la escena Play
            this.scene.start("Play");
        });
    }
}