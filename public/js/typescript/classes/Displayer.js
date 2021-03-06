export class Displayer {
    constructor(container, objetivoCalories, objetivo) {
        this.container = container;
        this.objetivoCalories = objetivoCalories;
        this.objetivo = objetivo;
    }
    display() {
        const container = this.container;
        container.innerHTML = "";
        const descriptionElement = document.createElement("p");
        const descriptionContent = `Si querés ${this.objetivo} tu peso, debes comer alrededor de:`;
        descriptionElement.innerText = descriptionContent;
        const caloriesElement = document.createElement("h1");
        const caloriesContent = this.objetivoCalories;
        caloriesElement.innerText = caloriesContent.toString();
        container.appendChild(descriptionElement);
        container.appendChild(caloriesElement);
    }
}
