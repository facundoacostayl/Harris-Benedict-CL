export class Displayer {
  constructor(private container: HTMLDivElement) {}

  displayErrorMessages(errorMessages: string[], title: HTMLElement) {
    const container = this.container;
    title.style.opacity = "0";
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("col-12", "bg-danger", "errorAlert");
    errorMessages.forEach((e) => {
      let message = document.createElement("p");
      message.innerText = e;
      errorDiv.appendChild(message);
    });
    container.prepend(errorDiv);
  }

  displayActividad() {
    const container = this.container;

    container.innerHTML = "";

    const labelDiv = document.createElement("div");
    labelDiv.className = "col-md-6 text-center";
    labelDiv.innerHTML = `<label for="actividad">Nivel de Actividad</label>`;

    const selectDiv = document.createElement("div");
    selectDiv.className = "col-md-6";
    selectDiv.innerHTML = `
         <select class="text-center" name="actividad" id="actividad">
                    <option value="sedentario">Sedentario</option>
                    <option value="ligera">Actividad Ligera</option>
                    <option value="moderada">Actividad Moderada</option>
                    <option value="intensa">Actividad Intensa</option>
                    <option value="muy-intensa">Actividad Muy Intensa</option>
                </select>
        `;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "col-12";
    buttonDiv.innerHTML = `<p class="objetivoBtn button">Continuar</p>`;

    container.appendChild(labelDiv);
    container.appendChild(selectDiv);
    container.appendChild(buttonDiv);
  }

  displayObjetivo() {
    const container = this.container;

    container.innerHTML = "";

    const labelDiv = document.createElement("div");
    labelDiv.className = "col-md-6 text-center";
    labelDiv.innerHTML = `<label for="actividad">Mi Objetivo es</label>`;

    const selectDiv = document.createElement("div");
    selectDiv.className = "col-md-6";
    selectDiv.innerHTML = `
         <select class="text-center" id="objetivo" name="objetivo">
                    <option value="mantener">Mantener mi peso</option>
                    <option value="bajar">Bajar de peso</option>
                    <option value="subir">Subir de peso</option>
                </select>
        `;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "col-12";
    buttonDiv.innerHTML = `<input class="button" id="submit" type="submit" value="Calcular">`;

    container.appendChild(labelDiv);
    container.appendChild(selectDiv);
    container.appendChild(buttonDiv);
  }

  displayResult(objetivoCalories: number, objetivo: string) {
    const container = this.container;

    container.innerHTML = "";
    const descriptionElement = document.createElement("p");
    const descriptionContent = `Si quieres ${objetivo} tu peso, tu ingesta cal??rica debe ser de:`;
    descriptionElement.innerText = descriptionContent;

    const caloriesElement = document.createElement("h1");
    const caloriesContent = objetivoCalories;
    caloriesElement.innerText = caloriesContent.toString();

   
    container.appendChild(descriptionElement);
    container.appendChild(caloriesElement);
  }
}
