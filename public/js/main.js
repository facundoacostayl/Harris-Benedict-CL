import { Hombre } from './classes/Hombre.js';
import { Mujer } from './classes/Mujer.js';
import { Calculator } from './classes/Calculator.js';
import { Displayer } from './classes/Displayer.js';
const container = document.querySelector('#form');
const form = document.querySelector('form');
const continueBtn = document.querySelector('.actividadBtn');
const titleForm = document.querySelector('.title__form');
const typeNumberInputs = document.querySelectorAll('.numInput');
const sexo = document.querySelector('#sexo');
const peso = document.querySelector('#peso');
const tipoDePeso = document.querySelector('#tipo-de-peso');
let estatura;
let feet;
let inches;
const tipoDeMedida = document.querySelector('#tipo-de-medida');
const edad = document.querySelector('#edad');
let actividad;
let objetivo;
if (tipoDeMedida.value === "cm") {
    estatura = document.querySelector('#estatura');
}
else {
    if (document.querySelector("#inches") && document.querySelector("#feet")) {
        feet = document.querySelector("#feet");
        inches = document.querySelector("#inches");
        const inchPlusFeet = inches.valueAsNumber.toString() + feet.valueAsNumber.toString();
        ///estatura = Number(inchPlusFeet);
    }
}
const displayer = new Displayer(container);
let isCorrect = true;
const errorMessages = [];
const desactivateButton = () => {
    continueBtn.classList.add("buttonDisabled");
};
const paintInputNormal = (event) => {
    event.style.border = "none";
};
const activateButton = () => {
    continueBtn.classList.remove("buttonDisabled");
};
const displayError = (event) => {
    event.style.border = "1px solid red";
    desactivateButton();
    errorMessages.push("De ser correctos los campos marcados en rojo, recomendamos consultar con un especialista para un analisis óptimo.");
    displayer.displayErrorMessages(errorMessages, titleForm);
    isCorrect = false;
};
typeNumberInputs.forEach(i => {
    i.addEventListener("blur", (e) => {
        const input = e.target;
        if (input.id === "peso" && tipoDePeso.value === "kilos") {
            if (input.valueAsNumber >= 300) {
                displayError(input);
            }
            else if (input.valueAsNumber <= 45) {
                displayError(input);
            }
            else {
                paintInputNormal(input);
                isCorrect = true;
            }
        }
        if (input.id === "peso" && tipoDePeso.value === "lb") {
            if (input.valueAsNumber >= 660) {
                displayError(input);
            }
            else if (input.valueAsNumber <= 45) {
                displayError(input);
            }
            else {
                paintInputNormal(input);
                isCorrect = true;
            }
        }
        if (input.id === "estatura" && tipoDeMedida.value === "cm") {
            if (estatura.valueAsNumber >= 240) {
                displayError(input);
            }
            else {
                paintInputNormal(input);
            }
        }
        //CONTINUE HERE - NORMAL AGE VERIFICATION
    });
});
typeNumberInputs.forEach(i => {
    i.addEventListener("input", (e) => {
        const input = e.target;
        if (input.value === "") {
            activateButton();
        }
    });
});
continueBtn.addEventListener('click', () => {
    if (!peso.valueAsNumber) {
        isCorrect = false;
        errorMessages.push("Debes ingresar un peso válido");
    }
    if (!estatura.valueAsNumber) {
        isCorrect = false;
        errorMessages.push("Debes ingresar una estatura válida");
    }
    if (!edad.valueAsNumber) {
        isCorrect = false;
        errorMessages.push("Debes ingresar una edad válida");
    }
    if (!isCorrect) {
        if (container.querySelector(".errorAlert")) {
            container.removeChild(container.children[0]);
        }
        displayer.displayErrorMessages(errorMessages, titleForm);
        desactivateButton();
    }
    else {
        displayer.displayActividad(); //ACA
        actividad = document.querySelector('#actividad');
        if (document.querySelector(".objetivoBtn")) {
            const objetivoBtn = document.querySelector(".objetivoBtn");
            objetivoBtn.addEventListener("click", () => {
                displayer.displayObjetivo(); // Y ACA
                objetivo = document.querySelector('#objetivo');
            });
        }
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let user;
    if (sexo.value === 'hombre') {
        user = new Hombre(peso.valueAsNumber, tipoDePeso.value, estatura.valueAsNumber, tipoDeMedida.value, edad.valueAsNumber, actividad.value);
    }
    else {
        user = new Mujer(peso.valueAsNumber, tipoDePeso.value, estatura.valueAsNumber, tipoDeMedida.value, edad.valueAsNumber, actividad.value);
    }
    const calculator = new Calculator(user.calculate());
    const rmb = calculator.calculateRmb();
    const objetivoCalories = calculator.calculateGoals(objetivo.value, rmb);
    displayer.displayResult(objetivoCalories, objetivo.value);
});
