export class Displayer {
    constructor(container, objetivo, actividad) {
        this.container = container;
        this.objetivo = objetivo;
        this.actividad = actividad;
    }
    display() {
        this.container.style.display = "none";
    }
}
